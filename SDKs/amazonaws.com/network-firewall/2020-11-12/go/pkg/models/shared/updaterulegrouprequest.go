package shared

type UpdateRuleGroupRequest struct {
	Description   *string            `json:"Description"`
	DryRun        *bool              `json:"DryRun"`
	RuleGroup     *RuleGroup         `json:"RuleGroup"`
	RuleGroupArn  *string            `json:"RuleGroupArn"`
	RuleGroupName *string            `json:"RuleGroupName"`
	Rules         *string            `json:"Rules"`
	Type          *RuleGroupTypeEnum `json:"Type"`
	UpdateToken   string             `json:"UpdateToken"`
}
