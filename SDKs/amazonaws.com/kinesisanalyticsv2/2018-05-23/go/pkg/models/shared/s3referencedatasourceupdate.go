package shared

// S3ReferenceDataSourceUpdate
// For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table.
type S3ReferenceDataSourceUpdate struct {
	BucketArnUpdate *string `json:"BucketARNUpdate,omitempty"`
	FileKeyUpdate   *string `json:"FileKeyUpdate,omitempty"`
}
