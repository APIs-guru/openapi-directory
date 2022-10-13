package shared

type CreateRegexMatchSetResponse struct {
	ChangeToken   *string        `json:"ChangeToken"`
	RegexMatchSet *RegexMatchSet `json:"RegexMatchSet"`
}
