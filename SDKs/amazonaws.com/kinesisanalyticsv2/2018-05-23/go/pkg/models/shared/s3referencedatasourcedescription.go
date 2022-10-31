package shared

type S3ReferenceDataSourceDescription struct {
	BucketArn        string  `json:"BucketARN"`
	FileKey          string  `json:"FileKey"`
	ReferenceRoleArn *string `json:"ReferenceRoleARN,omitempty"`
}
