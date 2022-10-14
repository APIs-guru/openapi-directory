package shared

type AwsElbAppCookieStickinessPolicy struct {
	CookieName *string `json:"CookieName,omitempty"`
	PolicyName *string `json:"PolicyName,omitempty"`
}
