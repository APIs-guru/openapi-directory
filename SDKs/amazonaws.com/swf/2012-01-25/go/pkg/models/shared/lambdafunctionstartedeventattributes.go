package shared

// LambdaFunctionStartedEventAttributes
// Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.
type LambdaFunctionStartedEventAttributes struct {
	ScheduledEventID int64 `json:"scheduledEventId"`
}
