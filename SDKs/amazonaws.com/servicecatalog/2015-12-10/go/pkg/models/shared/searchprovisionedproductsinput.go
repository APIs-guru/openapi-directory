package shared

type SearchProvisionedProductsInput struct {
	AcceptLanguage    *string             `json:"AcceptLanguage"`
	AccessLevelFilter *AccessLevelFilter  `json:"AccessLevelFilter"`
	Filters           map[string][]string `json:"Filters"`
	PageSize          *int64              `json:"PageSize"`
	PageToken         *string             `json:"PageToken"`
	SortBy            *string             `json:"SortBy"`
	SortOrder         *SortOrderEnum      `json:"SortOrder"`
}
