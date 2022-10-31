package shared

type TimerCanceledEventAttributes struct {
	DecisionTaskCompletedEventID int64  `json:"decisionTaskCompletedEventId"`
	StartedEventID               int64  `json:"startedEventId"`
	TimerID                      string `json:"timerId"`
}
