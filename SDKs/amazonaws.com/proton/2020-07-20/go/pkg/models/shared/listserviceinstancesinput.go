package shared



type ListServiceInstancesInput struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ServiceName *string `json:"serviceName,omitempty"`
    
}

