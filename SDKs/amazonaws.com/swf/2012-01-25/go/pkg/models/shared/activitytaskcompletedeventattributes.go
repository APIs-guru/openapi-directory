package shared

// ActivityTaskCompletedEventAttributes
// Provides the details of the <code>ActivityTaskCompleted</code> event.
type ActivityTaskCompletedEventAttributes struct {
	Result           *string `json:"result,omitempty"`
	ScheduledEventID int64   `json:"scheduledEventId"`
	StartedEventID   int64   `json:"startedEventId"`
}
