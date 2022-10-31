package shared



type UpdateRegexMatchSetRequest struct {
    ChangeToken string `json:"ChangeToken"`
    RegexMatchSetID string `json:"RegexMatchSetId"`
    Updates []RegexMatchSetUpdate `json:"Updates"`
    
}

