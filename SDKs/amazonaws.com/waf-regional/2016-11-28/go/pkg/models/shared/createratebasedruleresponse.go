package shared

type CreateRateBasedRuleResponse struct {
	ChangeToken *string        `json:"ChangeToken,omitempty"`
	Rule        *RateBasedRule `json:"Rule,omitempty"`
}
