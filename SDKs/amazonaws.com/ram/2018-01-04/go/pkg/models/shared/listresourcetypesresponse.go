package shared



type ListResourceTypesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    ResourceTypes []ServiceNameAndResourceType `json:"resourceTypes,omitempty"`
    
}

