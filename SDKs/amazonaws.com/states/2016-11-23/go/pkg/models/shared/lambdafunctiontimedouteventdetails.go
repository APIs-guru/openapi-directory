package shared

// LambdaFunctionTimedOutEventDetails
// Contains details about a lambda function timeout that occurred during an execution.
type LambdaFunctionTimedOutEventDetails struct {
	Cause *string `json:"cause,omitempty"`
	Error *string `json:"error,omitempty"`
}
