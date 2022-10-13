package shared

type DeleteRuleGroupRequest struct {
	RuleGroupArn  *string            `json:"RuleGroupArn"`
	RuleGroupName *string            `json:"RuleGroupName"`
	Type          *RuleGroupTypeEnum `json:"Type"`
}
