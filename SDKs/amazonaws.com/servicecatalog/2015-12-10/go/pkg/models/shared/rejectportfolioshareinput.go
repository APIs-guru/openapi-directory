package shared

type RejectPortfolioShareInput struct {
	AcceptLanguage     *string                 `json:"AcceptLanguage,omitempty"`
	PortfolioID        string                  `json:"PortfolioId"`
	PortfolioShareType *PortfolioShareTypeEnum `json:"PortfolioShareType,omitempty"`
}
