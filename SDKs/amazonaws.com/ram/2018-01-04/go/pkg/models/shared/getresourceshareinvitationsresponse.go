package shared



type GetResourceShareInvitationsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    ResourceShareInvitations []ResourceShareInvitation `json:"resourceShareInvitations,omitempty"`
    
}

