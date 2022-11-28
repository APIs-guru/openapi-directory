package shared

// ScheduleLambdaFunctionFailedEventAttributes
// Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.
type ScheduleLambdaFunctionFailedEventAttributes struct {
	Cause                        ScheduleLambdaFunctionFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                                 `json:"decisionTaskCompletedEventId"`
	ID                           string                                `json:"id"`
	Name                         string                                `json:"name"`
}
