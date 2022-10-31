package shared

type DisassociateProductFromPortfolioInput struct {
	AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
	PortfolioID    string  `json:"PortfolioId"`
	ProductID      string  `json:"ProductId"`
}
