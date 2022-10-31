package shared

type S3Destination struct {
	BucketName string  `json:"bucketName"`
	KeyPrefix  *string `json:"keyPrefix,omitempty"`
	KmsKeyArn  string  `json:"kmsKeyArn"`
}
