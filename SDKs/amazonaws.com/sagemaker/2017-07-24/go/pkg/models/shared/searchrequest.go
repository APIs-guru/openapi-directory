package shared



type SearchRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Resource ResourceTypeEnum `json:"Resource"`
    SearchExpression *SearchExpression `json:"SearchExpression,omitempty"`
    SortBy *string `json:"SortBy,omitempty"`
    SortOrder *SearchSortOrderEnum `json:"SortOrder,omitempty"`
    
}

