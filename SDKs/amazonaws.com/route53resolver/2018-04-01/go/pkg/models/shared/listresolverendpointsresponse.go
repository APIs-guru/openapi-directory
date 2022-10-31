package shared



type ListResolverEndpointsResponse struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResolverEndpoints []ResolverEndpoint `json:"ResolverEndpoints,omitempty"`
    
}

