package shared

// DecisionTaskTimedOutEventAttributes
// Provides the details of the <code>DecisionTaskTimedOut</code> event.
type DecisionTaskTimedOutEventAttributes struct {
	ScheduledEventID int64                       `json:"scheduledEventId"`
	StartedEventID   int64                       `json:"startedEventId"`
	TimeoutType      DecisionTaskTimeoutTypeEnum `json:"timeoutType"`
}
