package shared

// DeleteXSSMatchSetResponse
// The response to a request to delete an <a>XssMatchSet</a> from AWS WAF.
type DeleteXSSMatchSetResponse struct {
	ChangeToken *string `json:"ChangeToken,omitempty"`
}
