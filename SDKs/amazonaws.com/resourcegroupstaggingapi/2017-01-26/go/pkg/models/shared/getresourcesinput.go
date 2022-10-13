package shared

type GetResourcesInput struct {
	ExcludeCompliantResources *bool       `json:"ExcludeCompliantResources"`
	IncludeComplianceDetails  *bool       `json:"IncludeComplianceDetails"`
	PaginationToken           *string     `json:"PaginationToken"`
	ResourceArnList           []string    `json:"ResourceARNList"`
	ResourceTypeFilters       []string    `json:"ResourceTypeFilters"`
	ResourcesPerPage          *int64      `json:"ResourcesPerPage"`
	TagFilters                []TagFilter `json:"TagFilters"`
	TagsPerPage               *int64      `json:"TagsPerPage"`
}
