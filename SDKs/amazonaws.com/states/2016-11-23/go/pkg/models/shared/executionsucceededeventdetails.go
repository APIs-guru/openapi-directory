package shared

type ExecutionSucceededEventDetails struct {
	Output        *string                           `json:"output"`
	OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails"`
}
