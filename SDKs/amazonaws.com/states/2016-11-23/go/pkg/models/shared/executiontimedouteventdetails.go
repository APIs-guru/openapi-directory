package shared

// ExecutionTimedOutEventDetails
// Contains details about the execution timeout that occurred during the execution.
type ExecutionTimedOutEventDetails struct {
	Cause *string `json:"cause,omitempty"`
	Error *string `json:"error,omitempty"`
}
