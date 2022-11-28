package shared

// S3Configuration
// Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data.
type S3Configuration struct {
	BucketArn string `json:"BucketARN"`
	FileKey   string `json:"FileKey"`
	RoleArn   string `json:"RoleARN"`
}
