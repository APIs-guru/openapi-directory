package shared

// AwsElbLoadBalancerPolicies
// Contains information about the policies for a load balancer.
type AwsElbLoadBalancerPolicies struct {
	AppCookieStickinessPolicies []AwsElbAppCookieStickinessPolicy `json:"AppCookieStickinessPolicies,omitempty"`
	LbCookieStickinessPolicies  []AwsElbLbCookieStickinessPolicy  `json:"LbCookieStickinessPolicies,omitempty"`
	OtherPolicies               []string                          `json:"OtherPolicies,omitempty"`
}
