package shared

// S3Destination
// Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.
type S3Destination struct {
	BucketName string  `json:"bucketName"`
	KeyPrefix  *string `json:"keyPrefix,omitempty"`
	KmsKeyArn  string  `json:"kmsKeyArn"`
}
