package shared

type AwsS3BucketNotificationConfigurationFilter struct {
	S3KeyFilter *AwsS3BucketNotificationConfigurationS3KeyFilter `json:"S3KeyFilter,omitempty"`
}
