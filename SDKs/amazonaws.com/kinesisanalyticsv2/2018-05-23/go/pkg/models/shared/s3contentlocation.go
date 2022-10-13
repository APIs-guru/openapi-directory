package shared

type S3ContentLocation struct {
	BucketArn     string  `json:"BucketARN"`
	FileKey       string  `json:"FileKey"`
	ObjectVersion *string `json:"ObjectVersion"`
}
