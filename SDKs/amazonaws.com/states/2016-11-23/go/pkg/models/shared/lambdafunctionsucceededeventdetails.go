package shared

type LambdaFunctionSucceededEventDetails struct {
	Output        *string                           `json:"output"`
	OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails"`
}
