package shared

type CreateRuleGroupResponse struct {
	ChangeToken *string    `json:"ChangeToken"`
	RuleGroup   *RuleGroup `json:"RuleGroup"`
}
