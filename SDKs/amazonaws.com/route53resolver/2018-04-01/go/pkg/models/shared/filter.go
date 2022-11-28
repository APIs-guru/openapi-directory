package shared

// Filter
// <p>For Resolver list operations (<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html">ListResolverRuleAssociations</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html">ListResolverQueryLogConfigAssociations</a>), and <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html">ListResolverDnssecConfigs</a>), an optional specification to return a subset of objects.</p> <p>To filter objects, such as Resolver endpoints or Resolver rules, you specify <code>Name</code> and <code>Values</code>. For example, to list only inbound Resolver endpoints, specify <code>Direction</code> for <code>Name</code> and specify <code>INBOUND</code> for <code>Values</code>. </p>
type Filter struct {
	Name   *string  `json:"Name,omitempty"`
	Values []string `json:"Values,omitempty"`
}
