package shared

type ListResolverQueryLogConfigAssociationsRequest struct {
	Filters    []Filter       `json:"Filters"`
	MaxResults *int64         `json:"MaxResults"`
	NextToken  *string        `json:"NextToken"`
	SortBy     *string        `json:"SortBy"`
	SortOrder  *SortOrderEnum `json:"SortOrder"`
}
