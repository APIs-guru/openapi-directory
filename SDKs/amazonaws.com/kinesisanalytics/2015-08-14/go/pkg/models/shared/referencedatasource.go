package shared

// ReferenceDataSource
// Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
type ReferenceDataSource struct {
	ReferenceSchema       SourceSchema           `json:"ReferenceSchema"`
	S3ReferenceDataSource *S3ReferenceDataSource `json:"S3ReferenceDataSource,omitempty"`
	TableName             string                 `json:"TableName"`
}
