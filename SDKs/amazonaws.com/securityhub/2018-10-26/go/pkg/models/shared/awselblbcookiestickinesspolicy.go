package shared

type AwsElbLbCookieStickinessPolicy struct {
	CookieExpirationPeriod *int64  `json:"CookieExpirationPeriod,omitempty"`
	PolicyName             *string `json:"PolicyName,omitempty"`
}
