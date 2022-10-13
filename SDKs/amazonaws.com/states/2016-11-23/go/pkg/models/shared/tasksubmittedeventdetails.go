package shared

type TaskSubmittedEventDetails struct {
	Output        *string                           `json:"output"`
	OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails"`
	Resource      string                            `json:"resource"`
	ResourceType  string                            `json:"resourceType"`
}
