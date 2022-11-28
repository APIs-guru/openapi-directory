package shared

// LambdaFunctionStartFailedEventDetails
// Contains details about a lambda function that failed to start during an execution.
type LambdaFunctionStartFailedEventDetails struct {
	Cause *string `json:"cause,omitempty"`
	Error *string `json:"error,omitempty"`
}
