package shared

// StartLambdaFunctionFailedEventAttributes
// Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.
type StartLambdaFunctionFailedEventAttributes struct {
	Cause            *StartLambdaFunctionFailedCauseEnum `json:"cause,omitempty"`
	Message          *string                             `json:"message,omitempty"`
	ScheduledEventID *int64                              `json:"scheduledEventId,omitempty"`
}
