package shared

type ListWorkteamsRequest struct {
	MaxResults   *int64                          `json:"MaxResults,omitempty"`
	NameContains *string                         `json:"NameContains,omitempty"`
	NextToken    *string                         `json:"NextToken,omitempty"`
	SortBy       *ListWorkteamsSortByOptionsEnum `json:"SortBy,omitempty"`
	SortOrder    *SortOrderEnum                  `json:"SortOrder,omitempty"`
}
