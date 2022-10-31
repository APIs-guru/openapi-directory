package shared

type DeleteRateBasedRuleRequest struct {
	ChangeToken string `json:"ChangeToken"`
	RuleID      string `json:"RuleId"`
}
