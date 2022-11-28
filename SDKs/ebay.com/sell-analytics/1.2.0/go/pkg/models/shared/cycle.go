package shared

// Cycle
// A complex type that describes a program cycle.
type Cycle struct {
	CycleType       *string `json:"cycleType,omitempty"`
	EvaluationDate  *string `json:"evaluationDate,omitempty"`
	EvaluationMonth *string `json:"evaluationMonth,omitempty"`
}
