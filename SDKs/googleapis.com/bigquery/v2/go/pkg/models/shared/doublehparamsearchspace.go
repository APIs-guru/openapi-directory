package shared

type DoubleHparamSearchSpace struct {
	Candidates *DoubleCandidates `json:"candidates,omitempty"`
	Range      *DoubleRange      `json:"range,omitempty"`
}
