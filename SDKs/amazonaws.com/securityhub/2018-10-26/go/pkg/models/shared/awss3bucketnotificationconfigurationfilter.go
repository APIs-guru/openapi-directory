package shared

// AwsS3BucketNotificationConfigurationFilter
// Filtering information for the notifications. The filtering is based on Amazon S3 key names.
type AwsS3BucketNotificationConfigurationFilter struct {
	S3KeyFilter *AwsS3BucketNotificationConfigurationS3KeyFilter `json:"S3KeyFilter,omitempty"`
}
