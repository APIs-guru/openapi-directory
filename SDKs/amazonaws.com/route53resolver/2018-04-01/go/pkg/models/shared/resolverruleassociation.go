package shared

// ResolverRuleAssociation
// In the response to an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a> request, provides information about an association between a Resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.
type ResolverRuleAssociation struct {
	ID             *string                            `json:"Id,omitempty"`
	Name           *string                            `json:"Name,omitempty"`
	ResolverRuleID *string                            `json:"ResolverRuleId,omitempty"`
	Status         *ResolverRuleAssociationStatusEnum `json:"Status,omitempty"`
	StatusMessage  *string                            `json:"StatusMessage,omitempty"`
	VpcID          *string                            `json:"VPCId,omitempty"`
}
