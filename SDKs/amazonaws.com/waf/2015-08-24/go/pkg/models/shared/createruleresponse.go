package shared

type CreateRuleResponse struct {
	ChangeToken *string `json:"ChangeToken"`
	Rule        *Rule   `json:"Rule"`
}
