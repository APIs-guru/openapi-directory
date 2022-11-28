package shared

// UpdateSQLInjectionMatchSetRequest
// A request to update a <a>SqlInjectionMatchSet</a>.
type UpdateSQLInjectionMatchSetRequest struct {
	ChangeToken            string                       `json:"ChangeToken"`
	SQLInjectionMatchSetID string                       `json:"SqlInjectionMatchSetId"`
	Updates                []SQLInjectionMatchSetUpdate `json:"Updates"`
}
