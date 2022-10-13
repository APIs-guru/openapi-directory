package shared

type ConnectorResource struct {
	DownstreamID        *string             `json:"downstream_id"`
	DownstreamName      *string             `json:"downstream_name"`
	ID                  *string             `json:"id"`
	Name                *string             `json:"name"`
	PaginationSupported *bool               `json:"pagination_supported"`
	Status              *ResourceStatusEnum `json:"status"`
	SupportedFields     []SupportedProperty `json:"supported_fields"`
	SupportedFilters    []string            `json:"supported_filters"`
	SupportedListFields []SupportedProperty `json:"supported_list_fields"`
	SupportedOperations []string            `json:"supported_operations"`
	SupportedSortBy     []string            `json:"supported_sort_by"`
}
