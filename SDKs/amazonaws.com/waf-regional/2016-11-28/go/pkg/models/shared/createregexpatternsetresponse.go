package shared

type CreateRegexPatternSetResponse struct {
	ChangeToken     *string          `json:"ChangeToken"`
	RegexPatternSet *RegexPatternSet `json:"RegexPatternSet"`
}
