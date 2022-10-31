package shared

type DeleteRuleRequest struct {
	ChangeToken string `json:"ChangeToken"`
	RuleID      string `json:"RuleId"`
}
