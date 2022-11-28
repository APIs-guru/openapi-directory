package shared

// TimerCanceledEventAttributes
//
//	Provides the details of the <code>TimerCanceled</code> event.
type TimerCanceledEventAttributes struct {
	DecisionTaskCompletedEventID int64  `json:"decisionTaskCompletedEventId"`
	StartedEventID               int64  `json:"startedEventId"`
	TimerID                      string `json:"timerId"`
}
