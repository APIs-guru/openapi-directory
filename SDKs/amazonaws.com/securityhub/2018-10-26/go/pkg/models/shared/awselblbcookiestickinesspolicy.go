package shared

// AwsElbLbCookieStickinessPolicy
// Contains information about a stickiness policy that was created using <code>CreateLBCookieStickinessPolicy</code>.
type AwsElbLbCookieStickinessPolicy struct {
	CookieExpirationPeriod *int64  `json:"CookieExpirationPeriod,omitempty"`
	PolicyName             *string `json:"PolicyName,omitempty"`
}
