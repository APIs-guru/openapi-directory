package shared

// IPAddressUpdate
// In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, information about an IP address to update.
type IPAddressUpdate struct {
	IP       *string `json:"Ip,omitempty"`
	IPID     *string `json:"IpId,omitempty"`
	SubnetID *string `json:"SubnetId,omitempty"`
}
