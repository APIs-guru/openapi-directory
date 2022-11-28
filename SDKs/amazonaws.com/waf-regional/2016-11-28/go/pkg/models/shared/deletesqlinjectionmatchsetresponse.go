package shared

// DeleteSQLInjectionMatchSetResponse
// The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
type DeleteSQLInjectionMatchSetResponse struct {
	ChangeToken *string `json:"ChangeToken,omitempty"`
}
