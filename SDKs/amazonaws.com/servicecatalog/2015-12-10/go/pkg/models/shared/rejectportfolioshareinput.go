package shared

type RejectPortfolioShareInput struct {
	AcceptLanguage     *string                 `json:"AcceptLanguage"`
	PortfolioID        string                  `json:"PortfolioId"`
	PortfolioShareType *PortfolioShareTypeEnum `json:"PortfolioShareType"`
}
