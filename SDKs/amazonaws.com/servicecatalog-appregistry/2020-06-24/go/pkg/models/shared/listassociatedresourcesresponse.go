package shared



type ListAssociatedResourcesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Resources []ResourceInfo `json:"resources,omitempty"`
    
}

