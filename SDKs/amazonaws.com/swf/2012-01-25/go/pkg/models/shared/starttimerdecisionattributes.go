package shared

type StartTimerDecisionAttributes struct {
	Control            *string `json:"control,omitempty"`
	StartToFireTimeout string  `json:"startToFireTimeout"`
	TimerID            string  `json:"timerId"`
}
