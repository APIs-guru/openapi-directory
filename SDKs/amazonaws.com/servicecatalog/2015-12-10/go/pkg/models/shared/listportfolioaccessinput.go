package shared



type ListPortfolioAccessInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    OrganizationParentID *string `json:"OrganizationParentId,omitempty"`
    PageSize *int64 `json:"PageSize,omitempty"`
    PageToken *string `json:"PageToken,omitempty"`
    PortfolioID string `json:"PortfolioId"`
    
}

