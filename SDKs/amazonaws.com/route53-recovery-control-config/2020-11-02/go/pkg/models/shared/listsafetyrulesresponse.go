package shared



type ListSafetyRulesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    SafetyRules []Rule `json:"SafetyRules,omitempty"`
    
}

