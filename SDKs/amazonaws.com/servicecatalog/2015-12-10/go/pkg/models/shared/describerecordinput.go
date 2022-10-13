package shared

type DescribeRecordInput struct {
	AcceptLanguage *string `json:"AcceptLanguage"`
	ID             string  `json:"Id"`
	PageSize       *int64  `json:"PageSize"`
	PageToken      *string `json:"PageToken"`
}
