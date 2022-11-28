package shared

// IPAddressResponse
// In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> request, information about the IP addresses that the Resolver endpoint uses for DNS queries.
type IPAddressResponse struct {
	CreationTime     *string              `json:"CreationTime,omitempty"`
	IP               *string              `json:"Ip,omitempty"`
	IPID             *string              `json:"IpId,omitempty"`
	ModificationTime *string              `json:"ModificationTime,omitempty"`
	Status           *IPAddressStatusEnum `json:"Status,omitempty"`
	StatusMessage    *string              `json:"StatusMessage,omitempty"`
	SubnetID         *string              `json:"SubnetId,omitempty"`
}
