package shared

type ListAppsRequest struct {
	DomainIDEquals        *string         `json:"DomainIdEquals"`
	MaxResults            *int64          `json:"MaxResults"`
	NextToken             *string         `json:"NextToken"`
	SortBy                *AppSortKeyEnum `json:"SortBy"`
	SortOrder             *SortOrderEnum  `json:"SortOrder"`
	UserProfileNameEquals *string         `json:"UserProfileNameEquals"`
}
