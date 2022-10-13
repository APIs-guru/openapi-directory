package shared

type S3ContentBaseLocationDescription struct {
	BasePath  *string `json:"BasePath"`
	BucketArn string  `json:"BucketARN"`
}
