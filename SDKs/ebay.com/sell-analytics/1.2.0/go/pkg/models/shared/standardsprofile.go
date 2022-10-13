package shared

type StandardsProfile struct {
	Cycle            *Cycle   `json:"cycle"`
	DefaultProgram   *bool    `json:"defaultProgram"`
	EvaluationReason *string  `json:"evaluationReason"`
	Metrics          []Metric `json:"metrics"`
	Program          *string  `json:"program"`
	StandardsLevel   *string  `json:"standardsLevel"`
}
