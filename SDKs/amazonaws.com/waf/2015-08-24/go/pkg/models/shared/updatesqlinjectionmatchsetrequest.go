package shared



type UpdateSQLInjectionMatchSetRequest struct {
    ChangeToken string `json:"ChangeToken"`
    SQLInjectionMatchSetID string `json:"SqlInjectionMatchSetId"`
    Updates []SQLInjectionMatchSetUpdate `json:"Updates"`
    
}

