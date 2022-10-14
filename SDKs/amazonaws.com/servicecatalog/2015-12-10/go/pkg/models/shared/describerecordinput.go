package shared

type DescribeRecordInput struct {
	AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
	ID             string  `json:"Id"`
	PageSize       *int64  `json:"PageSize,omitempty"`
	PageToken      *string `json:"PageToken,omitempty"`
}
