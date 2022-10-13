package shared

type IntHparamSearchSpace struct {
	Candidates *IntCandidates `json:"candidates"`
	Range      *IntRange      `json:"range"`
}
