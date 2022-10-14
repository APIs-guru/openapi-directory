package shared

type ReferenceDataSourceUpdate struct {
	ReferenceID                 string                       `json:"ReferenceId"`
	ReferenceSchemaUpdate       *SourceSchema                `json:"ReferenceSchemaUpdate,omitempty"`
	S3ReferenceDataSourceUpdate *S3ReferenceDataSourceUpdate `json:"S3ReferenceDataSourceUpdate,omitempty"`
	TableNameUpdate             *string                      `json:"TableNameUpdate,omitempty"`
}
