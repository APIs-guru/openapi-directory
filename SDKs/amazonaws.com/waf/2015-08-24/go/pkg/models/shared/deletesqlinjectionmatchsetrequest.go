package shared

// DeleteSQLInjectionMatchSetRequest
// A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
type DeleteSQLInjectionMatchSetRequest struct {
	ChangeToken            string `json:"ChangeToken"`
	SQLInjectionMatchSetID string `json:"SqlInjectionMatchSetId"`
}
