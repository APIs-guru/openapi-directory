package shared

// ResolverQueryLogConfig
// In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html">CreateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html">DeleteResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html">GetResolverQueryLogConfig</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a> request, a complex type that contains settings for one query logging configuration.
type ResolverQueryLogConfig struct {
	Arn              *string                           `json:"Arn,omitempty"`
	AssociationCount *int64                            `json:"AssociationCount,omitempty"`
	CreationTime     *string                           `json:"CreationTime,omitempty"`
	CreatorRequestID *string                           `json:"CreatorRequestId,omitempty"`
	DestinationArn   *string                           `json:"DestinationArn,omitempty"`
	ID               *string                           `json:"Id,omitempty"`
	Name             *string                           `json:"Name,omitempty"`
	OwnerID          *string                           `json:"OwnerId,omitempty"`
	ShareStatus      *ShareStatusEnum                  `json:"ShareStatus,omitempty"`
	Status           *ResolverQueryLogConfigStatusEnum `json:"Status,omitempty"`
}
