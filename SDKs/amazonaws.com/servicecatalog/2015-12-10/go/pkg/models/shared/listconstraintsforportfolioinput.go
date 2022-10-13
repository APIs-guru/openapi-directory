package shared

type ListConstraintsForPortfolioInput struct {
	AcceptLanguage *string `json:"AcceptLanguage"`
	PageSize       *int64  `json:"PageSize"`
	PageToken      *string `json:"PageToken"`
	PortfolioID    string  `json:"PortfolioId"`
	ProductID      *string `json:"ProductId"`
}
