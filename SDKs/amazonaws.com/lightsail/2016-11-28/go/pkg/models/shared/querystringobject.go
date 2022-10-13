package shared

type QueryStringObject struct {
	Option                *bool    `json:"option"`
	QueryStringsAllowList []string `json:"queryStringsAllowList"`
}
