package shared

// CreateSQLInjectionMatchSetResponse
// The response to a <code>CreateSqlInjectionMatchSet</code> request.
type CreateSQLInjectionMatchSetResponse struct {
	ChangeToken          *string               `json:"ChangeToken,omitempty"`
	SQLInjectionMatchSet *SQLInjectionMatchSet `json:"SqlInjectionMatchSet,omitempty"`
}
