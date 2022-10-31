package shared



type ListInvitationsResponse struct {
    Invitations []Invitation `json:"invitations,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

