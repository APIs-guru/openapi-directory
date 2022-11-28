package shared

// AwsS3BucketLoggingConfiguration
// Information about logging for the S3 bucket
type AwsS3BucketLoggingConfiguration struct {
	DestinationBucketName *string `json:"DestinationBucketName,omitempty"`
	LogFilePrefix         *string `json:"LogFilePrefix,omitempty"`
}
