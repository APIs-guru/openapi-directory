package shared



type ListUserProfilesRequest struct {
    DomainIDEquals *string `json:"DomainIdEquals,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *UserProfileSortKeyEnum `json:"SortBy,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    UserProfileNameContains *string `json:"UserProfileNameContains,omitempty"`
    
}

