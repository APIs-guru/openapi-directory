package shared

// ActivityFailedEventDetails
// Contains details about an activity that failed during an execution.
type ActivityFailedEventDetails struct {
	Cause *string `json:"cause,omitempty"`
	Error *string `json:"error,omitempty"`
}
