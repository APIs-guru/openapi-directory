package shared

type UpdateRuleGroupRequest struct {
	Description   *string            `json:"Description,omitempty"`
	DryRun        *bool              `json:"DryRun,omitempty"`
	RuleGroup     *RuleGroup         `json:"RuleGroup,omitempty"`
	RuleGroupArn  *string            `json:"RuleGroupArn,omitempty"`
	RuleGroupName *string            `json:"RuleGroupName,omitempty"`
	Rules         *string            `json:"Rules,omitempty"`
	Type          *RuleGroupTypeEnum `json:"Type,omitempty"`
	UpdateToken   string             `json:"UpdateToken"`
}
