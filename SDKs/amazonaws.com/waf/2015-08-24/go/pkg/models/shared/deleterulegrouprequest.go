package shared

type DeleteRuleGroupRequest struct {
	ChangeToken string `json:"ChangeToken"`
	RuleGroupID string `json:"RuleGroupId"`
}
