package shared

type ListWorkforcesRequest struct {
	MaxResults   *int64                           `json:"MaxResults,omitempty"`
	NameContains *string                          `json:"NameContains,omitempty"`
	NextToken    *string                          `json:"NextToken,omitempty"`
	SortBy       *ListWorkforcesSortByOptionsEnum `json:"SortBy,omitempty"`
	SortOrder    *SortOrderEnum                   `json:"SortOrder,omitempty"`
}
