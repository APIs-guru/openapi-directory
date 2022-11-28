package shared

// S3ReferenceDataSourceUpdate
// Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
type S3ReferenceDataSourceUpdate struct {
	BucketArnUpdate        *string `json:"BucketARNUpdate,omitempty"`
	FileKeyUpdate          *string `json:"FileKeyUpdate,omitempty"`
	ReferenceRoleArnUpdate *string `json:"ReferenceRoleARNUpdate,omitempty"`
}
