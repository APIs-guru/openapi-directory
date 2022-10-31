package shared



type ListResourcesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Resources []Resource `json:"Resources,omitempty"`
    
}

