package shared



type RejectResourceShareInvitationResponse struct {
    ClientToken *string `json:"clientToken,omitempty"`
    ResourceShareInvitation *ResourceShareInvitation `json:"resourceShareInvitation,omitempty"`
    
}

