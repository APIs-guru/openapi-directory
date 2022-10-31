package shared



type ListOrganizationPortfolioAccessInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    OrganizationNodeType OrganizationNodeTypeEnum `json:"OrganizationNodeType"`
    PageSize *int64 `json:"PageSize,omitempty"`
    PageToken *string `json:"PageToken,omitempty"`
    PortfolioID string `json:"PortfolioId"`
    
}

