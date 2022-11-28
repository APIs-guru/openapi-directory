package shared

// StartTimerFailedEventAttributes
// Provides the details of the <code>StartTimerFailed</code> event.
type StartTimerFailedEventAttributes struct {
	Cause                        StartTimerFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                     `json:"decisionTaskCompletedEventId"`
	TimerID                      string                    `json:"timerId"`
}
