package shared

type StartTimerDecisionAttributes struct {
	Control            *string `json:"control"`
	StartToFireTimeout string  `json:"startToFireTimeout"`
	TimerID            string  `json:"timerId"`
}
