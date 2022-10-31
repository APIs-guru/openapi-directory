package shared



type UpdateByteMatchSetRequest struct {
    ByteMatchSetID string `json:"ByteMatchSetId"`
    ChangeToken string `json:"ChangeToken"`
    Updates []ByteMatchSetUpdate `json:"Updates"`
    
}

