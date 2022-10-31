package shared



type ListMembersResponse struct {
    Members []Member `json:"members,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

