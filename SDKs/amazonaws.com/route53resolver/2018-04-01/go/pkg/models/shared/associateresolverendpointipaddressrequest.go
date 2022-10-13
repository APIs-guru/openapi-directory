package shared

type AssociateResolverEndpointIPAddressRequest struct {
	IPAddress          IPAddressUpdate `json:"IpAddress"`
	ResolverEndpointID string          `json:"ResolverEndpointId"`
}
