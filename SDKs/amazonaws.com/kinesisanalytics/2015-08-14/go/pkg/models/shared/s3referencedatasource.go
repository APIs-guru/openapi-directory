package shared

type S3ReferenceDataSource struct {
	BucketArn        string `json:"BucketARN"`
	FileKey          string `json:"FileKey"`
	ReferenceRoleArn string `json:"ReferenceRoleARN"`
}
