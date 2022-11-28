package shared

// CreateSQLInjectionMatchSetRequest
// A request to create a <a>SqlInjectionMatchSet</a>.
type CreateSQLInjectionMatchSetRequest struct {
	ChangeToken string `json:"ChangeToken"`
	Name        string `json:"Name"`
}
