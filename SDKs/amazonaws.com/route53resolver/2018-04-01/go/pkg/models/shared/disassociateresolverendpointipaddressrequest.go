package shared

type DisassociateResolverEndpointIPAddressRequest struct {
	IPAddress          IPAddressUpdate `json:"IpAddress"`
	ResolverEndpointID string          `json:"ResolverEndpointId"`
}
