package shared

type ListResolverEndpointsResponse struct {
	MaxResults        *int64             `json:"MaxResults"`
	NextToken         *string            `json:"NextToken"`
	ResolverEndpoints []ResolverEndpoint `json:"ResolverEndpoints"`
}
