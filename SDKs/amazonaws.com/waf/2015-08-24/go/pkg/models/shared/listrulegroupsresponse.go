package shared



type ListRuleGroupsResponse struct {
    NextMarker *string `json:"NextMarker,omitempty"`
    RuleGroups []RuleGroupSummary `json:"RuleGroups,omitempty"`
    
}

