package shared

type ListPortfoliosForProductInput struct {
	AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
	PageSize       *int64  `json:"PageSize,omitempty"`
	PageToken      *string `json:"PageToken,omitempty"`
	ProductID      string  `json:"ProductId"`
}
