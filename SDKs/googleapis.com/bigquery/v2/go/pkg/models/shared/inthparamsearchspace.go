package shared



type IntHparamSearchSpace struct {
    Candidates *IntCandidates `json:"candidates,omitempty"`
    Range *IntRange `json:"range,omitempty"`
    
}

