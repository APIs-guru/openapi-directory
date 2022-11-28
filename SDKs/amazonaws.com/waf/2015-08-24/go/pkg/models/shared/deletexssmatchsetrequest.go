package shared

// DeleteXSSMatchSetRequest
// A request to delete an <a>XssMatchSet</a> from AWS WAF.
type DeleteXSSMatchSetRequest struct {
	ChangeToken   string `json:"ChangeToken"`
	XSSMatchSetID string `json:"XssMatchSetId"`
}
