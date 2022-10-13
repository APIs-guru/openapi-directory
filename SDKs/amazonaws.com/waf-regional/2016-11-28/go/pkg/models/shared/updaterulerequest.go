package shared

type UpdateRuleRequest struct {
	ChangeToken string       `json:"ChangeToken"`
	RuleID      string       `json:"RuleId"`
	Updates     []RuleUpdate `json:"Updates"`
}
