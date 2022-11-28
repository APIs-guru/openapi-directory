package shared

// AwsS3BucketNotificationConfigurationS3KeyFilter
// Details for an Amazon S3 filter.
type AwsS3BucketNotificationConfigurationS3KeyFilter struct {
	FilterRules []AwsS3BucketNotificationConfigurationS3KeyFilterRule `json:"FilterRules,omitempty"`
}
