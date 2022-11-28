package shared

// ExecutionAbortedEventDetails
// Contains details about an abort of an execution.
type ExecutionAbortedEventDetails struct {
	Cause *string `json:"cause,omitempty"`
	Error *string `json:"error,omitempty"`
}
