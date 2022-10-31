package shared



type UpdateWebACLRequest struct {
    ChangeToken string `json:"ChangeToken"`
    DefaultAction *WafAction `json:"DefaultAction,omitempty"`
    Updates []WebACLUpdate `json:"Updates,omitempty"`
    WebACLID string `json:"WebACLId"`
    
}

