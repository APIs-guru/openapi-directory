package shared



type ListSubscribedRuleGroupsResponse struct {
    NextMarker *string `json:"NextMarker,omitempty"`
    RuleGroups []SubscribedRuleGroupSummary `json:"RuleGroups,omitempty"`
    
}

