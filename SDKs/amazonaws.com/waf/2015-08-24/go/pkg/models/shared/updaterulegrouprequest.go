package shared

type UpdateRuleGroupRequest struct {
	ChangeToken string            `json:"ChangeToken"`
	RuleGroupID string            `json:"RuleGroupId"`
	Updates     []RuleGroupUpdate `json:"Updates"`
}
