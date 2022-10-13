package shared

type ReferenceDataSourceDescription struct {
	ReferenceID                      string                           `json:"ReferenceId"`
	ReferenceSchema                  *SourceSchema                    `json:"ReferenceSchema"`
	S3ReferenceDataSourceDescription S3ReferenceDataSourceDescription `json:"S3ReferenceDataSourceDescription"`
	TableName                        string                           `json:"TableName"`
}
