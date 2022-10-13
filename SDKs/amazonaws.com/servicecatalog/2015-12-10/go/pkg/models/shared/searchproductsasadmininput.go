package shared

type SearchProductsAsAdminInput struct {
	AcceptLanguage *string                `json:"AcceptLanguage"`
	Filters        map[string][]string    `json:"Filters"`
	PageSize       *int64                 `json:"PageSize"`
	PageToken      *string                `json:"PageToken"`
	PortfolioID    *string                `json:"PortfolioId"`
	ProductSource  *ProductSourceEnum     `json:"ProductSource"`
	SortBy         *ProductViewSortByEnum `json:"SortBy"`
	SortOrder      *SortOrderEnum         `json:"SortOrder"`
}
