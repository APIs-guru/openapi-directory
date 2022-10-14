package shared

type ScheduleLambdaFunctionDecisionAttributes struct {
	Control             *string `json:"control,omitempty"`
	ID                  string  `json:"id"`
	Input               *string `json:"input,omitempty"`
	Name                string  `json:"name"`
	StartToCloseTimeout *string `json:"startToCloseTimeout,omitempty"`
}
