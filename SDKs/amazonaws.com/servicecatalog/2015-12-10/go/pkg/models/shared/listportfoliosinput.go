package shared

type ListPortfoliosInput struct {
	AcceptLanguage *string `json:"AcceptLanguage"`
	PageSize       *int64  `json:"PageSize"`
	PageToken      *string `json:"PageToken"`
}
