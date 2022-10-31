package shared



type ListResolverEndpointIPAddressesRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResolverEndpointID string `json:"ResolverEndpointId"`
    
}

