package shared

type ListResolverEndpointIPAddressesResponse struct {
	IPAddresses []IPAddressResponse `json:"IpAddresses,omitempty"`
	MaxResults  *int64              `json:"MaxResults,omitempty"`
	NextToken   *string             `json:"NextToken,omitempty"`
}
