package shared

type CookieObject struct {
	CookiesAllowList []string           `json:"cookiesAllowList"`
	Option           *ForwardValuesEnum `json:"option"`
}
