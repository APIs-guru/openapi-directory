package shared

type AwsS3BucketLoggingConfiguration struct {
	DestinationBucketName *string `json:"DestinationBucketName,omitempty"`
	LogFilePrefix         *string `json:"LogFilePrefix,omitempty"`
}
