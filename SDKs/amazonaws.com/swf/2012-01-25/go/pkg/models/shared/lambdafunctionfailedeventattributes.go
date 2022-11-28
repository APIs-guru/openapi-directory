package shared

// LambdaFunctionFailedEventAttributes
// Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types.
type LambdaFunctionFailedEventAttributes struct {
	Details          *string `json:"details,omitempty"`
	Reason           *string `json:"reason,omitempty"`
	ScheduledEventID int64   `json:"scheduledEventId"`
	StartedEventID   int64   `json:"startedEventId"`
}
