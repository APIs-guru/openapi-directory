package shared

// LambdaFunctionScheduledEventDetails
// Contains details about a lambda function scheduled during an execution.
type LambdaFunctionScheduledEventDetails struct {
	Input            *string                           `json:"input,omitempty"`
	InputDetails     *HistoryEventExecutionDataDetails `json:"inputDetails,omitempty"`
	Resource         string                            `json:"resource"`
	TimeoutInSeconds *int64                            `json:"timeoutInSeconds,omitempty"`
}
