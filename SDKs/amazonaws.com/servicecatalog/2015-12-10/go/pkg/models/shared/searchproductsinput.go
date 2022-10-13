package shared

type SearchProductsInput struct {
	AcceptLanguage *string                `json:"AcceptLanguage"`
	Filters        map[string][]string    `json:"Filters"`
	PageSize       *int64                 `json:"PageSize"`
	PageToken      *string                `json:"PageToken"`
	SortBy         *ProductViewSortByEnum `json:"SortBy"`
	SortOrder      *SortOrderEnum         `json:"SortOrder"`
}
