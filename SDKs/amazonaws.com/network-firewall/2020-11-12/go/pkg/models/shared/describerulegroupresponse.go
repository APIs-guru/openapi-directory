package shared

type DescribeRuleGroupResponse struct {
	RuleGroup         *RuleGroup        `json:"RuleGroup"`
	RuleGroupResponse RuleGroupResponse `json:"RuleGroupResponse"`
	UpdateToken       string            `json:"UpdateToken"`
}
