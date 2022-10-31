package shared

type CreateRegexMatchSetResponse struct {
	ChangeToken   *string        `json:"ChangeToken,omitempty"`
	RegexMatchSet *RegexMatchSet `json:"RegexMatchSet,omitempty"`
}
