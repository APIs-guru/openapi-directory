package shared

// TargetAddress
// In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.
type TargetAddress struct {
	IP   string `json:"Ip"`
	Port *int64 `json:"Port,omitempty"`
}
