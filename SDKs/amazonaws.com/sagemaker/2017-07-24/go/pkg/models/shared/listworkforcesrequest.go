package shared

type ListWorkforcesRequest struct {
	MaxResults   *int64                           `json:"MaxResults"`
	NameContains *string                          `json:"NameContains"`
	NextToken    *string                          `json:"NextToken"`
	SortBy       *ListWorkforcesSortByOptionsEnum `json:"SortBy"`
	SortOrder    *SortOrderEnum                   `json:"SortOrder"`
}
