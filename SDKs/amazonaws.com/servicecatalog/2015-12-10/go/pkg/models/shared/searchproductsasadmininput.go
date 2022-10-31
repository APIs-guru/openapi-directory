package shared



type SearchProductsAsAdminInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    Filters map[string][]string `json:"Filters,omitempty"`
    PageSize *int64 `json:"PageSize,omitempty"`
    PageToken *string `json:"PageToken,omitempty"`
    PortfolioID *string `json:"PortfolioId,omitempty"`
    ProductSource *ProductSourceEnum `json:"ProductSource,omitempty"`
    SortBy *ProductViewSortByEnum `json:"SortBy,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    
}

