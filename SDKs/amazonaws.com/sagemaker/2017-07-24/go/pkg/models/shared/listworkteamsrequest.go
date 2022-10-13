package shared

type ListWorkteamsRequest struct {
	MaxResults   *int64                          `json:"MaxResults"`
	NameContains *string                         `json:"NameContains"`
	NextToken    *string                         `json:"NextToken"`
	SortBy       *ListWorkteamsSortByOptionsEnum `json:"SortBy"`
	SortOrder    *SortOrderEnum                  `json:"SortOrder"`
}
