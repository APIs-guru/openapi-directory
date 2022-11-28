package shared

// DecisionTaskStartedEventAttributes
// Provides the details of the <code>DecisionTaskStarted</code> event.
type DecisionTaskStartedEventAttributes struct {
	Identity         *string `json:"identity,omitempty"`
	ScheduledEventID int64   `json:"scheduledEventId"`
}
