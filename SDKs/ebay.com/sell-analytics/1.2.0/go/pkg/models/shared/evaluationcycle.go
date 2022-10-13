package shared

type EvaluationCycle struct {
	EndDate        *string `json:"endDate"`
	EvaluationDate *string `json:"evaluationDate"`
	EvaluationType *string `json:"evaluationType"`
	StartDate      *string `json:"startDate"`
}
