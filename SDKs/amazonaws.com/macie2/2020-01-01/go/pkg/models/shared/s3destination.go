package shared

type S3Destination struct {
	BucketName string  `json:"bucketName"`
	KeyPrefix  *string `json:"keyPrefix"`
	KmsKeyArn  string  `json:"kmsKeyArn"`
}
