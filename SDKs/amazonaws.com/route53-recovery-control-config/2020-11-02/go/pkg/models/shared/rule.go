package shared



type Rule struct {
    Assertion *AssertionRule `json:"ASSERTION,omitempty"`
    Gating *GatingRule `json:"GATING,omitempty"`
    
}

