package shared



type ListMembersResponse struct {
    Members []Member `json:"Members,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

