package shared

type ListResourceTypesResponse struct {
	NextToken     *string                      `json:"nextToken"`
	ResourceTypes []ServiceNameAndResourceType `json:"resourceTypes"`
}
