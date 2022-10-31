package shared



type ListDistributedGrantsResponse struct {
    Grants []Grant `json:"Grants,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

