package shared

type ListUserProfilesRequest struct {
	DomainIDEquals          *string                 `json:"DomainIdEquals"`
	MaxResults              *int64                  `json:"MaxResults"`
	NextToken               *string                 `json:"NextToken"`
	SortBy                  *UserProfileSortKeyEnum `json:"SortBy"`
	SortOrder               *SortOrderEnum          `json:"SortOrder"`
	UserProfileNameContains *string                 `json:"UserProfileNameContains"`
}
