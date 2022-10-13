package shared

type ListRuleGroupsResponse struct {
	NextMarker *string            `json:"NextMarker"`
	RuleGroups []RuleGroupSummary `json:"RuleGroups"`
}
