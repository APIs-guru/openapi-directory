package shared

// ExecutionStartedEventDetails
// Contains details about the start of the execution.
type ExecutionStartedEventDetails struct {
	Input        *string                           `json:"input,omitempty"`
	InputDetails *HistoryEventExecutionDataDetails `json:"inputDetails,omitempty"`
	RoleArn      *string                           `json:"roleArn,omitempty"`
}
