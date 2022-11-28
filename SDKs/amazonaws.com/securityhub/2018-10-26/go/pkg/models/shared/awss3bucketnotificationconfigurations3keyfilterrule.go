package shared

// AwsS3BucketNotificationConfigurationS3KeyFilterRule
// Details for a filter rule.
type AwsS3BucketNotificationConfigurationS3KeyFilterRule struct {
	Name  *AwsS3BucketNotificationConfigurationS3KeyFilterRuleNameEnum `json:"Name,omitempty"`
	Value *string                                                      `json:"Value,omitempty"`
}
