package shared

type DeleteSQLInjectionMatchSetRequest struct {
	ChangeToken            string `json:"ChangeToken"`
	SQLInjectionMatchSetID string `json:"SqlInjectionMatchSetId"`
}
