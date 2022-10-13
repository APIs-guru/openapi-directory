package shared

type ListRuleGroupsResponse struct {
	NextToken  *string             `json:"NextToken"`
	RuleGroups []RuleGroupMetadata `json:"RuleGroups"`
}
