package shared

type ListResolverEndpointIPAddressesRequest struct {
	MaxResults         *int64  `json:"MaxResults"`
	NextToken          *string `json:"NextToken"`
	ResolverEndpointID string  `json:"ResolverEndpointId"`
}
