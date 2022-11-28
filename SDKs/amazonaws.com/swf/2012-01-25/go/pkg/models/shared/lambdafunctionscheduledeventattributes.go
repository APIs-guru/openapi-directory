package shared

// LambdaFunctionScheduledEventAttributes
// Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types.
type LambdaFunctionScheduledEventAttributes struct {
	Control                      *string `json:"control,omitempty"`
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	ID                           string  `json:"id"`
	Input                        *string `json:"input,omitempty"`
	Name                         string  `json:"name"`
	StartToCloseTimeout          *string `json:"startToCloseTimeout,omitempty"`
}
