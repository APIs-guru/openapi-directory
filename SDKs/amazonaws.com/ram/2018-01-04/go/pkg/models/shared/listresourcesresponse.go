package shared



type ListResourcesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Resources []Resource `json:"resources,omitempty"`
    
}

