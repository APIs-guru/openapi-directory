package shared



type ListStudioMembersResponse struct {
    Members []StudioMembership `json:"members,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

