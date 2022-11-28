package shared

// ActivityTaskTimedOutEventAttributes
// Provides the details of the <code>ActivityTaskTimedOut</code> event.
type ActivityTaskTimedOutEventAttributes struct {
	Details          *string                     `json:"details,omitempty"`
	ScheduledEventID int64                       `json:"scheduledEventId"`
	StartedEventID   int64                       `json:"startedEventId"`
	TimeoutType      ActivityTaskTimeoutTypeEnum `json:"timeoutType"`
}
