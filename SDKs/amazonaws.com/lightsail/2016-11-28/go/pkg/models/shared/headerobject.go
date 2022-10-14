package shared

type HeaderObject struct {
	HeadersAllowList []HeaderEnumEnum   `json:"headersAllowList,omitempty"`
	Option           *ForwardValuesEnum `json:"option,omitempty"`
}
