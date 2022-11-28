package shared

// AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails
// A rule for when objects transition to specific storage classes.
type AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails struct {
	Date         *string `json:"Date,omitempty"`
	Days         *int64  `json:"Days,omitempty"`
	StorageClass *string `json:"StorageClass,omitempty"`
}
