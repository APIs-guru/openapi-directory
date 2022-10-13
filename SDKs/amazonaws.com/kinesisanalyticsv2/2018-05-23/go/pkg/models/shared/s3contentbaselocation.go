package shared

type S3ContentBaseLocation struct {
	BasePath  *string `json:"BasePath"`
	BucketArn string  `json:"BucketARN"`
}
