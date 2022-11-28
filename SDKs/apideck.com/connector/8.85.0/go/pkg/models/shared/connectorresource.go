package shared

type ConnectorResource struct {
	CustomFieldsSupported           *bool               `json:"custom_fields_supported,omitempty"`
	DownstreamID                    *string             `json:"downstream_id,omitempty"`
	DownstreamName                  *string             `json:"downstream_name,omitempty"`
	DownstreamUnsupportedOperations []string            `json:"downstream_unsupported_operations,omitempty"`
	ID                              *string             `json:"id,omitempty"`
	Name                            *string             `json:"name,omitempty"`
	Pagination                      *PaginationCoverage `json:"pagination,omitempty"`
	PaginationSupported             *bool               `json:"pagination_supported,omitempty"`
	Status                          *ResourceStatusEnum `json:"status,omitempty"`
	SupportedFields                 []SupportedProperty `json:"supported_fields,omitempty"`
	SupportedFilters                []string            `json:"supported_filters,omitempty"`
	SupportedListFields             []SupportedProperty `json:"supported_list_fields,omitempty"`
	SupportedOperations             []string            `json:"supported_operations,omitempty"`
	SupportedSortBy                 []string            `json:"supported_sort_by,omitempty"`
}
