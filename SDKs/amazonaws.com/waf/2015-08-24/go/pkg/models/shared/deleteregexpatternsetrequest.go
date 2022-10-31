package shared

type DeleteRegexPatternSetRequest struct {
	ChangeToken       string `json:"ChangeToken"`
	RegexPatternSetID string `json:"RegexPatternSetId"`
}
