package shared

type S3Location struct {
	BucketArn     string  `json:"bucketArn"`
	FileKey       string  `json:"fileKey"`
	ObjectVersion *string `json:"objectVersion,omitempty"`
}
