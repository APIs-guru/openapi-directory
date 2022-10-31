package shared



type ListReceivedGrantsResponse struct {
    Grants []Grant `json:"Grants,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

