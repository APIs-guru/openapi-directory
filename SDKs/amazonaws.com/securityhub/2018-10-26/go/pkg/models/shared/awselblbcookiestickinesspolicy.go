package shared

type AwsElbLbCookieStickinessPolicy struct {
	CookieExpirationPeriod *int64  `json:"CookieExpirationPeriod"`
	PolicyName             *string `json:"PolicyName"`
}
