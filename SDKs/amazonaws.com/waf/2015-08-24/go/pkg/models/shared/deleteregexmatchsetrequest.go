package shared

type DeleteRegexMatchSetRequest struct {
	ChangeToken     string `json:"ChangeToken"`
	RegexMatchSetID string `json:"RegexMatchSetId"`
}
