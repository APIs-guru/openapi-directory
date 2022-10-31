package shared



type ListDeviceResourcesOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    Resources []ResourceSummary `json:"resources,omitempty"`
    
}

