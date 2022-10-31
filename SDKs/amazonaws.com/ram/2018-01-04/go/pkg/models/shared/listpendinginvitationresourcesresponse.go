package shared



type ListPendingInvitationResourcesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Resources []Resource `json:"resources,omitempty"`
    
}

