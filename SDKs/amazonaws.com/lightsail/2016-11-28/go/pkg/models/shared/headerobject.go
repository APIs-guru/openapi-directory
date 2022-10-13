package shared

type HeaderObject struct {
	HeadersAllowList []HeaderEnumEnum   `json:"headersAllowList"`
	Option           *ForwardValuesEnum `json:"option"`
}
