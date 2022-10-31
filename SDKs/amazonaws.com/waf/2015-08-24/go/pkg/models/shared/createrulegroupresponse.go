package shared

type CreateRuleGroupResponse struct {
	ChangeToken *string    `json:"ChangeToken,omitempty"`
	RuleGroup   *RuleGroup `json:"RuleGroup,omitempty"`
}
