package shared

type S3ApplicationCodeLocationDescription struct {
	BucketArn     string  `json:"BucketARN"`
	FileKey       string  `json:"FileKey"`
	ObjectVersion *string `json:"ObjectVersion"`
}
