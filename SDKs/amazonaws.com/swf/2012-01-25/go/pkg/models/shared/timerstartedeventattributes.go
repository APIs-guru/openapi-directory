package shared

// TimerStartedEventAttributes
// Provides the details of the <code>TimerStarted</code> event.
type TimerStartedEventAttributes struct {
	Control                      *string `json:"control,omitempty"`
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	StartToFireTimeout           string  `json:"startToFireTimeout"`
	TimerID                      string  `json:"timerId"`
}
