package shared

type CreateRateBasedRuleResponse struct {
	ChangeToken *string        `json:"ChangeToken"`
	Rule        *RateBasedRule `json:"Rule"`
}
