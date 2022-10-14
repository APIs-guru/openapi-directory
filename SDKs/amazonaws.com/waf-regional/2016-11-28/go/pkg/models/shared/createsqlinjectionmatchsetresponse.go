package shared

type CreateSQLInjectionMatchSetResponse struct {
	ChangeToken          *string               `json:"ChangeToken,omitempty"`
	SQLInjectionMatchSet *SQLInjectionMatchSet `json:"SqlInjectionMatchSet,omitempty"`
}
