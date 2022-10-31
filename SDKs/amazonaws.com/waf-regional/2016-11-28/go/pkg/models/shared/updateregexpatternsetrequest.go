package shared



type UpdateRegexPatternSetRequest struct {
    ChangeToken string `json:"ChangeToken"`
    RegexPatternSetID string `json:"RegexPatternSetId"`
    Updates []RegexPatternSetUpdate `json:"Updates"`
    
}

