package shared

type ListSchemasResponse struct {
	NextToken *string                `json:"nextToken"`
	Schemas   []DatasetSchemaSummary `json:"schemas"`
}
