package shared

type GetResourcesOutput struct {
	PaginationToken        *string              `json:"PaginationToken,omitempty"`
	ResourceTagMappingList []ResourceTagMapping `json:"ResourceTagMappingList,omitempty"`
}
