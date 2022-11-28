package shared

// LambdaFunctionSucceededEventDetails
// Contains details about a lambda function that successfully terminated during an execution.
type LambdaFunctionSucceededEventDetails struct {
	Output        *string                           `json:"output,omitempty"`
	OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails,omitempty"`
}
