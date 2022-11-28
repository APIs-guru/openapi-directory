package shared

// ActivityTaskStartedEventAttributes
// Provides the details of the <code>ActivityTaskStarted</code> event.
type ActivityTaskStartedEventAttributes struct {
	Identity         *string `json:"identity,omitempty"`
	ScheduledEventID int64   `json:"scheduledEventId"`
}
