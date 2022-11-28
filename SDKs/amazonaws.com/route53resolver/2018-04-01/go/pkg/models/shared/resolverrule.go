package shared

// ResolverRule
// For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request.
type ResolverRule struct {
	Arn                *string                 `json:"Arn,omitempty"`
	CreationTime       *string                 `json:"CreationTime,omitempty"`
	CreatorRequestID   *string                 `json:"CreatorRequestId,omitempty"`
	DomainName         *string                 `json:"DomainName,omitempty"`
	ID                 *string                 `json:"Id,omitempty"`
	ModificationTime   *string                 `json:"ModificationTime,omitempty"`
	Name               *string                 `json:"Name,omitempty"`
	OwnerID            *string                 `json:"OwnerId,omitempty"`
	ResolverEndpointID *string                 `json:"ResolverEndpointId,omitempty"`
	RuleType           *RuleTypeOptionEnum     `json:"RuleType,omitempty"`
	ShareStatus        *ShareStatusEnum        `json:"ShareStatus,omitempty"`
	Status             *ResolverRuleStatusEnum `json:"Status,omitempty"`
	StatusMessage      *string                 `json:"StatusMessage,omitempty"`
	TargetIps          []TargetAddress         `json:"TargetIps,omitempty"`
}
