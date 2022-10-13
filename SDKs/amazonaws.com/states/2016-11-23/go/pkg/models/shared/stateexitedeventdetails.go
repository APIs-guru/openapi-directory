package shared

type StateExitedEventDetails struct {
	Name          string                            `json:"name"`
	Output        *string                           `json:"output"`
	OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails"`
}
