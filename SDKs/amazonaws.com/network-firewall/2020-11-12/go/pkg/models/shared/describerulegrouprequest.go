package shared

type DescribeRuleGroupRequest struct {
	RuleGroupArn  *string            `json:"RuleGroupArn"`
	RuleGroupName *string            `json:"RuleGroupName"`
	Type          *RuleGroupTypeEnum `json:"Type"`
}
