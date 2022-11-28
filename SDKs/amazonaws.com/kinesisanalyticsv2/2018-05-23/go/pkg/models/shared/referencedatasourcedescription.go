package shared

// ReferenceDataSourceDescription
// For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application.
type ReferenceDataSourceDescription struct {
	ReferenceID                      string                           `json:"ReferenceId"`
	ReferenceSchema                  *SourceSchema                    `json:"ReferenceSchema,omitempty"`
	S3ReferenceDataSourceDescription S3ReferenceDataSourceDescription `json:"S3ReferenceDataSourceDescription"`
	TableName                        string                           `json:"TableName"`
}
