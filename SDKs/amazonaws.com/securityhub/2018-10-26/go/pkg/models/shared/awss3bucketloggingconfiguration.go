package shared

type AwsS3BucketLoggingConfiguration struct {
	DestinationBucketName *string `json:"DestinationBucketName"`
	LogFilePrefix         *string `json:"LogFilePrefix"`
}
