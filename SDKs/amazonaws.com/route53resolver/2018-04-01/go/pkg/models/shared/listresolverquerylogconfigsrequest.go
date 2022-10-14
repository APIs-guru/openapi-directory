package shared

type ListResolverQueryLogConfigsRequest struct {
	Filters    []Filter       `json:"Filters,omitempty"`
	MaxResults *int64         `json:"MaxResults,omitempty"`
	NextToken  *string        `json:"NextToken,omitempty"`
	SortBy     *string        `json:"SortBy,omitempty"`
	SortOrder  *SortOrderEnum `json:"SortOrder,omitempty"`
}
