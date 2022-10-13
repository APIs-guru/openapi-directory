package shared

type AwsElbLoadBalancerPolicies struct {
	AppCookieStickinessPolicies []AwsElbAppCookieStickinessPolicy `json:"AppCookieStickinessPolicies"`
	LbCookieStickinessPolicies  []AwsElbLbCookieStickinessPolicy  `json:"LbCookieStickinessPolicies"`
	OtherPolicies               []string                          `json:"OtherPolicies"`
}
