package shared

type APIResourceCoverageCoverageSupportedFields struct {
	UnifiedProperty *string `json:"unified_property"`
}

type APIResourceCoverageCoverageSupportedListFields struct {
	UnifiedProperty *string `json:"unified_property"`
}

type APIResourceCoverageCoverage struct {
	DownstreamID        *string                                          `json:"downstream_id"`
	DownstreamName      *string                                          `json:"downstream_name"`
	PaginationSupported *bool                                            `json:"pagination_supported"`
	SupportedFields     []APIResourceCoverageCoverageSupportedFields     `json:"supported_fields"`
	SupportedFilters    []string                                         `json:"supported_filters"`
	SupportedListFields []APIResourceCoverageCoverageSupportedListFields `json:"supported_list_fields"`
	SupportedOperations []string                                         `json:"supported_operations"`
	SupportedSortBy     []string                                         `json:"supported_sort_by"`
}

type APIResourceCoverage struct {
	Coverage []APIResourceCoverageCoverage `json:"coverage"`
	ID       *string                       `json:"id"`
	Name     *string                       `json:"name"`
	Status   *ResourceStatusEnum           `json:"status"`
}
