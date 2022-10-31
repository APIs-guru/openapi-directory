package shared



type UpdateSafetyRuleResponse struct {
    AssertionRule *AssertionRule `json:"AssertionRule,omitempty"`
    GatingRule *GatingRule `json:"GatingRule,omitempty"`
    
}

