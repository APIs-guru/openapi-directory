package shared

type GetResourcesOutput struct {
	PaginationToken        *string              `json:"PaginationToken"`
	ResourceTagMappingList []ResourceTagMapping `json:"ResourceTagMappingList"`
}
