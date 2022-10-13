package shared

type DoubleHparamSearchSpace struct {
	Candidates *DoubleCandidates `json:"candidates"`
	Range      *DoubleRange      `json:"range"`
}
