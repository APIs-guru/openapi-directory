package shared

// ExecutionFailedEventDetails
// Contains details about an execution failure event.
type ExecutionFailedEventDetails struct {
	Cause *string `json:"cause,omitempty"`
	Error *string `json:"error,omitempty"`
}
