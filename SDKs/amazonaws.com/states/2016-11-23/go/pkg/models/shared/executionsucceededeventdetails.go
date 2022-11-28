package shared

// ExecutionSucceededEventDetails
// Contains details about the successful termination of the execution.
type ExecutionSucceededEventDetails struct {
	Output        *string                           `json:"output,omitempty"`
	OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails,omitempty"`
}
