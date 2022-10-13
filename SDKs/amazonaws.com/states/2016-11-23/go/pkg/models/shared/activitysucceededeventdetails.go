package shared

type ActivitySucceededEventDetails struct {
	Output        *string                           `json:"output"`
	OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails"`
}
