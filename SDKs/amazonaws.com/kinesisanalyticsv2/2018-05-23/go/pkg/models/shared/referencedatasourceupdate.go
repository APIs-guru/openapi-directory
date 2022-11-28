package shared

// ReferenceDataSourceUpdate
// When you update a reference data source configuration for a SQL-based Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.
type ReferenceDataSourceUpdate struct {
	ReferenceID                 string                       `json:"ReferenceId"`
	ReferenceSchemaUpdate       *SourceSchema                `json:"ReferenceSchemaUpdate,omitempty"`
	S3ReferenceDataSourceUpdate *S3ReferenceDataSourceUpdate `json:"S3ReferenceDataSourceUpdate,omitempty"`
	TableNameUpdate             *string                      `json:"TableNameUpdate,omitempty"`
}
