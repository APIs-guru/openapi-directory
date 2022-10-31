package shared

type S3Configuration struct {
	BucketArn string `json:"BucketARN"`
	FileKey   string `json:"FileKey"`
	RoleArn   string `json:"RoleARN"`
}
