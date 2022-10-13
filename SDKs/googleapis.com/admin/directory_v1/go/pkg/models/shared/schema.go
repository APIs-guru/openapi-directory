package shared

type Schema struct {
	DisplayName *string           `json:"displayName"`
	Etag        *string           `json:"etag"`
	Fields      []SchemaFieldSpec `json:"fields"`
	Kind        *string           `json:"kind"`
	SchemaID    *string           `json:"schemaId"`
	SchemaName  *string           `json:"schemaName"`
}
