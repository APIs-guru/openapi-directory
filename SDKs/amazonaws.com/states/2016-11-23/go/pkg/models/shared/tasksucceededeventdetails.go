package shared

type TaskSucceededEventDetails struct {
	Output        *string                           `json:"output"`
	OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails"`
	Resource      string                            `json:"resource"`
	ResourceType  string                            `json:"resourceType"`
}
