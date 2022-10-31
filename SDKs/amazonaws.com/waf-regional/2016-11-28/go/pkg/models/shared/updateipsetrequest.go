package shared



type UpdateIPSetRequest struct {
    ChangeToken string `json:"ChangeToken"`
    IPSetID string `json:"IPSetId"`
    Updates []IPSetUpdate `json:"Updates"`
    
}

