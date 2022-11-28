package shared

// ActivityTimedOutEventDetails
// Contains details about an activity timeout that occurred during an execution.
type ActivityTimedOutEventDetails struct {
	Cause *string `json:"cause,omitempty"`
	Error *string `json:"error,omitempty"`
}
