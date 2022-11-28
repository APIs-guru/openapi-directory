package shared

// LambdaFunctionFailedEventDetails
// Contains details about a lambda function that failed during an execution.
type LambdaFunctionFailedEventDetails struct {
	Cause *string `json:"cause,omitempty"`
	Error *string `json:"error,omitempty"`
}
