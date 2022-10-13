package shared

type TimerStartedEventAttributes struct {
	Control                      *string `json:"control"`
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	StartToFireTimeout           string  `json:"startToFireTimeout"`
	TimerID                      string  `json:"timerId"`
}
