package shared

// ResolverEndpoint
// In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.
type ResolverEndpoint struct {
	Arn              *string                        `json:"Arn,omitempty"`
	CreationTime     *string                        `json:"CreationTime,omitempty"`
	CreatorRequestID *string                        `json:"CreatorRequestId,omitempty"`
	Direction        *ResolverEndpointDirectionEnum `json:"Direction,omitempty"`
	HostVpcID        *string                        `json:"HostVPCId,omitempty"`
	ID               *string                        `json:"Id,omitempty"`
	IPAddressCount   *int64                         `json:"IpAddressCount,omitempty"`
	ModificationTime *string                        `json:"ModificationTime,omitempty"`
	Name             *string                        `json:"Name,omitempty"`
	SecurityGroupIds []string                       `json:"SecurityGroupIds,omitempty"`
	Status           *ResolverEndpointStatusEnum    `json:"Status,omitempty"`
	StatusMessage    *string                        `json:"StatusMessage,omitempty"`
}
