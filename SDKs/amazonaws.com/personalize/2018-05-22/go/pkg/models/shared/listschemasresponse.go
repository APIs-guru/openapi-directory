package shared

type ListSchemasResponse struct {
	NextToken *string                `json:"nextToken,omitempty"`
	Schemas   []DatasetSchemaSummary `json:"schemas,omitempty"`
}
