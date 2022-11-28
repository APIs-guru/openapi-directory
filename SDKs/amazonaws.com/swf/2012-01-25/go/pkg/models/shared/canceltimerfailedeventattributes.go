package shared

// CancelTimerFailedEventAttributes
// Provides the details of the <code>CancelTimerFailed</code> event.
type CancelTimerFailedEventAttributes struct {
	Cause                        CancelTimerFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                      `json:"decisionTaskCompletedEventId"`
	TimerID                      string                     `json:"timerId"`
}
