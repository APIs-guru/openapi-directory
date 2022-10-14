package shared

type SearchProvisionedProductsInput struct {
	AcceptLanguage    *string             `json:"AcceptLanguage,omitempty"`
	AccessLevelFilter *AccessLevelFilter  `json:"AccessLevelFilter,omitempty"`
	Filters           map[string][]string `json:"Filters,omitempty"`
	PageSize          *int64              `json:"PageSize,omitempty"`
	PageToken         *string             `json:"PageToken,omitempty"`
	SortBy            *string             `json:"SortBy,omitempty"`
	SortOrder         *SortOrderEnum      `json:"SortOrder,omitempty"`
}
