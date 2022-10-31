package shared



type ListActivatedRulesInRuleGroupRequest struct {
    Limit *int64 `json:"Limit,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    RuleGroupID *string `json:"RuleGroupId,omitempty"`
    
}

