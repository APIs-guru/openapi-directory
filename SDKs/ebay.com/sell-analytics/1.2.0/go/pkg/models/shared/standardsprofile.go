package shared

// StandardsProfile
// A complex type that defines a seller profile.
type StandardsProfile struct {
	Cycle            *Cycle   `json:"cycle,omitempty"`
	DefaultProgram   *bool    `json:"defaultProgram,omitempty"`
	EvaluationReason *string  `json:"evaluationReason,omitempty"`
	Metrics          []Metric `json:"metrics,omitempty"`
	Program          *string  `json:"program,omitempty"`
	StandardsLevel   *string  `json:"standardsLevel,omitempty"`
}
