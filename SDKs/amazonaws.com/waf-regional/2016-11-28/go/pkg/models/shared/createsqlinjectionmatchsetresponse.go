package shared

type CreateSQLInjectionMatchSetResponse struct {
	ChangeToken          *string               `json:"ChangeToken"`
	SQLInjectionMatchSet *SQLInjectionMatchSet `json:"SqlInjectionMatchSet"`
}
