package shared

// LambdaFunctionCompletedEventAttributes
// Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types.
type LambdaFunctionCompletedEventAttributes struct {
	Result           *string `json:"result,omitempty"`
	ScheduledEventID int64   `json:"scheduledEventId"`
	StartedEventID   int64   `json:"startedEventId"`
}
