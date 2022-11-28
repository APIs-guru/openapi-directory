package shared

// DecisionTaskCompletedEventAttributes
// Provides the details of the <code>DecisionTaskCompleted</code> event.
type DecisionTaskCompletedEventAttributes struct {
	ExecutionContext *string `json:"executionContext,omitempty"`
	ScheduledEventID int64   `json:"scheduledEventId"`
	StartedEventID   int64   `json:"startedEventId"`
}
