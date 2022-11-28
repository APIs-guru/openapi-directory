package shared

// AwsElbAppCookieStickinessPolicy
// Contains information about a stickiness policy that was created using <code>CreateAppCookieStickinessPolicy</code>.
type AwsElbAppCookieStickinessPolicy struct {
	CookieName *string `json:"CookieName,omitempty"`
	PolicyName *string `json:"PolicyName,omitempty"`
}
