package shared

// ResolverQueryLogConfigAssociation
// In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html">GetResolverQueryLogConfigAssociation</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>, request, a complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.
type ResolverQueryLogConfigAssociation struct {
	CreationTime             *string                                      `json:"CreationTime,omitempty"`
	Error                    *ResolverQueryLogConfigAssociationErrorEnum  `json:"Error,omitempty"`
	ErrorMessage             *string                                      `json:"ErrorMessage,omitempty"`
	ID                       *string                                      `json:"Id,omitempty"`
	ResolverQueryLogConfigID *string                                      `json:"ResolverQueryLogConfigId,omitempty"`
	ResourceID               *string                                      `json:"ResourceId,omitempty"`
	Status                   *ResolverQueryLogConfigAssociationStatusEnum `json:"Status,omitempty"`
}
