package shared



type Schema struct {
    DisplayName *string `json:"displayName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Fields []SchemaFieldSpec `json:"fields,omitempty"`
    Kind *string `json:"kind,omitempty"`
    SchemaID *string `json:"schemaId,omitempty"`
    SchemaName *string `json:"schemaName,omitempty"`
    
}

