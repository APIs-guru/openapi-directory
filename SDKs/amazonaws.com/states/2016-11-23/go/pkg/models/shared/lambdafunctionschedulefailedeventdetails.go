package shared

// LambdaFunctionScheduleFailedEventDetails
// Contains details about a failed lambda function schedule event that occurred during an execution.
type LambdaFunctionScheduleFailedEventDetails struct {
	Cause *string `json:"cause,omitempty"`
	Error *string `json:"error,omitempty"`
}
