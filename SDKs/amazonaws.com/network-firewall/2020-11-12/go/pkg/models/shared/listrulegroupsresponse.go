package shared



type ListRuleGroupsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    RuleGroups []RuleGroupMetadata `json:"RuleGroups,omitempty"`
    
}

