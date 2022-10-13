package shared

type AssociateProductWithPortfolioInput struct {
	AcceptLanguage    *string `json:"AcceptLanguage"`
	PortfolioID       string  `json:"PortfolioId"`
	ProductID         string  `json:"ProductId"`
	SourcePortfolioID *string `json:"SourcePortfolioId"`
}
