package shared

type CookieObject struct {
	CookiesAllowList []string           `json:"cookiesAllowList,omitempty"`
	Option           *ForwardValuesEnum `json:"option,omitempty"`
}
