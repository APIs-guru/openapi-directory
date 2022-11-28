package shared

// IntHparamSearchSpace
// Search space for an int hyperparameter.
type IntHparamSearchSpace struct {
	Candidates *IntCandidates `json:"candidates,omitempty"`
	Range      *IntRange      `json:"range,omitempty"`
}
