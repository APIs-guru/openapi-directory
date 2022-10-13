package shared

type ListResolverEndpointIPAddressesResponse struct {
	IPAddresses []IPAddressResponse `json:"IpAddresses"`
	MaxResults  *int64              `json:"MaxResults"`
	NextToken   *string             `json:"NextToken"`
}
