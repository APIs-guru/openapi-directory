package shared

type EvaluationCycle struct {
	EndDate        *string `json:"endDate,omitempty"`
	EvaluationDate *string `json:"evaluationDate,omitempty"`
	EvaluationType *string `json:"evaluationType,omitempty"`
	StartDate      *string `json:"startDate,omitempty"`
}
