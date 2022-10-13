package shared

type ListSubscribedRuleGroupsResponse struct {
	NextMarker *string                      `json:"NextMarker"`
	RuleGroups []SubscribedRuleGroupSummary `json:"RuleGroups"`
}
