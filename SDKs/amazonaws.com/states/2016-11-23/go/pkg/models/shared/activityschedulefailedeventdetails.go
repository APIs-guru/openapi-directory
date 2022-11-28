package shared

// ActivityScheduleFailedEventDetails
// Contains details about an activity schedule failure that occurred during an execution.
type ActivityScheduleFailedEventDetails struct {
	Cause *string `json:"cause,omitempty"`
	Error *string `json:"error,omitempty"`
}
