package shared

type ReferenceDataSource struct {
	ReferenceSchema       SourceSchema           `json:"ReferenceSchema"`
	S3ReferenceDataSource *S3ReferenceDataSource `json:"S3ReferenceDataSource,omitempty"`
	TableName             string                 `json:"TableName"`
}
