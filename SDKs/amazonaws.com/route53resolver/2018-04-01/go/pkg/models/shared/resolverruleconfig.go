package shared

// ResolverRuleConfig
// In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request, information about the changes that you want to make.
type ResolverRuleConfig struct {
	Name               *string         `json:"Name,omitempty"`
	ResolverEndpointID *string         `json:"ResolverEndpointId,omitempty"`
	TargetIps          []TargetAddress `json:"TargetIps,omitempty"`
}
