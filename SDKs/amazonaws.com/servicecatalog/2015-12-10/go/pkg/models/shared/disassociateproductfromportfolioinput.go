package shared

type DisassociateProductFromPortfolioInput struct {
	AcceptLanguage *string `json:"AcceptLanguage"`
	PortfolioID    string  `json:"PortfolioId"`
	ProductID      string  `json:"ProductId"`
}
