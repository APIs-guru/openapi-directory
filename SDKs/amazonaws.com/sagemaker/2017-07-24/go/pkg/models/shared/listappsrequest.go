package shared



type ListAppsRequest struct {
    DomainIDEquals *string `json:"DomainIdEquals,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SortBy *AppSortKeyEnum `json:"SortBy,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    UserProfileNameEquals *string `json:"UserProfileNameEquals,omitempty"`
    
}

