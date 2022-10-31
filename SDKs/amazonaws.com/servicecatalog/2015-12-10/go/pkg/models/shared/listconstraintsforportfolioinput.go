package shared



type ListConstraintsForPortfolioInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    PageSize *int64 `json:"PageSize,omitempty"`
    PageToken *string `json:"PageToken,omitempty"`
    PortfolioID string `json:"PortfolioId"`
    ProductID *string `json:"ProductId,omitempty"`
    
}

