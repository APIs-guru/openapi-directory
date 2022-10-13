package shared

type ConnectorResourceSupportedFields struct {
	UnifiedProperty *string `json:"unified_property"`
}

type ConnectorResourceSupportedListFields struct {
	UnifiedProperty *string `json:"unified_property"`
}

type ConnectorResource struct {
	DownstreamID        *string                                `json:"downstream_id"`
	DownstreamName      *string                                `json:"downstream_name"`
	ID                  *string                                `json:"id"`
	Name                *string                                `json:"name"`
	PaginationSupported *bool                                  `json:"pagination_supported"`
	Status              *ResourceStatusEnum                    `json:"status"`
	SupportedFields     []ConnectorResourceSupportedFields     `json:"supported_fields"`
	SupportedFilters    []string                               `json:"supported_filters"`
	SupportedListFields []ConnectorResourceSupportedListFields `json:"supported_list_fields"`
	SupportedOperations []string                               `json:"supported_operations"`
	SupportedSortBy     []string                               `json:"supported_sort_by"`
}
