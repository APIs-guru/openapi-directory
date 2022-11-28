package shared

// AwsS3BucketNotificationConfiguration
// The notification configuration for the S3 bucket.
type AwsS3BucketNotificationConfiguration struct {
	Configurations []AwsS3BucketNotificationConfigurationDetail `json:"Configurations,omitempty"`
}
