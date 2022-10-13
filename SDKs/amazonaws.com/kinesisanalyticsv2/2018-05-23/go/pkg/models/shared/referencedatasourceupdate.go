package shared

type ReferenceDataSourceUpdate struct {
	ReferenceID                 string                       `json:"ReferenceId"`
	ReferenceSchemaUpdate       *SourceSchema                `json:"ReferenceSchemaUpdate"`
	S3ReferenceDataSourceUpdate *S3ReferenceDataSourceUpdate `json:"S3ReferenceDataSourceUpdate"`
	TableNameUpdate             *string                      `json:"TableNameUpdate"`
}
