package shared

type GetResourcesInput struct {
	ExcludeCompliantResources *bool       `json:"ExcludeCompliantResources,omitempty"`
	IncludeComplianceDetails  *bool       `json:"IncludeComplianceDetails,omitempty"`
	PaginationToken           *string     `json:"PaginationToken,omitempty"`
	ResourceArnList           []string    `json:"ResourceARNList,omitempty"`
	ResourceTypeFilters       []string    `json:"ResourceTypeFilters,omitempty"`
	ResourcesPerPage          *int64      `json:"ResourcesPerPage,omitempty"`
	TagFilters                []TagFilter `json:"TagFilters,omitempty"`
	TagsPerPage               *int64      `json:"TagsPerPage,omitempty"`
}
