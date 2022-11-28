package shared

// S3ReferenceDataSourceDescription
// For a SQL-based Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data.
type S3ReferenceDataSourceDescription struct {
	BucketArn        string  `json:"BucketARN"`
	FileKey          string  `json:"FileKey"`
	ReferenceRoleArn *string `json:"ReferenceRoleARN,omitempty"`
}
