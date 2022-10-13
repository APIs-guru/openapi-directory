package shared

type ScheduleLambdaFunctionDecisionAttributes struct {
	Control             *string `json:"control"`
	ID                  string  `json:"id"`
	Input               *string `json:"input"`
	Name                string  `json:"name"`
	StartToCloseTimeout *string `json:"startToCloseTimeout"`
}
