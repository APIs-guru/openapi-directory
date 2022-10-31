package shared



type ApplicationsResponse struct {
    Item []ApplicationResponse `json:"Item,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

