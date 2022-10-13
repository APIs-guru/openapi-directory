package shared

type SearchRequest struct {
	MaxResults       *int64               `json:"MaxResults"`
	NextToken        *string              `json:"NextToken"`
	Resource         ResourceTypeEnum     `json:"Resource"`
	SearchExpression *SearchExpression    `json:"SearchExpression"`
	SortBy           *string              `json:"SortBy"`
	SortOrder        *SearchSortOrderEnum `json:"SortOrder"`
}
