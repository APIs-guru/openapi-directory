package shared



type ListActivatedRulesInRuleGroupResponse struct {
    ActivatedRules []ActivatedRule `json:"ActivatedRules,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    
}

