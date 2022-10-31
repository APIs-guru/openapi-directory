package shared

type AwsElbLoadBalancerPolicies struct {
	AppCookieStickinessPolicies []AwsElbAppCookieStickinessPolicy `json:"AppCookieStickinessPolicies,omitempty"`
	LbCookieStickinessPolicies  []AwsElbLbCookieStickinessPolicy  `json:"LbCookieStickinessPolicies,omitempty"`
	OtherPolicies               []string                          `json:"OtherPolicies,omitempty"`
}
