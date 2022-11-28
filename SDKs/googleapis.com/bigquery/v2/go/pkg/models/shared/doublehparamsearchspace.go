package shared

// DoubleHparamSearchSpace
// Search space for a double hyperparameter.
type DoubleHparamSearchSpace struct {
	Candidates *DoubleCandidates `json:"candidates,omitempty"`
	Range      *DoubleRange      `json:"range,omitempty"`
}
