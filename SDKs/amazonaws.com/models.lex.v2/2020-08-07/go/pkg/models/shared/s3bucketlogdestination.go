package shared

// S3BucketLogDestination
// Specifies an Amazon S3 bucket for logging audio conversations
type S3BucketLogDestination struct {
	KmsKeyArn   *string `json:"kmsKeyArn,omitempty"`
	LogPrefix   string  `json:"logPrefix"`
	S3BucketArn string  `json:"s3BucketArn"`
}
