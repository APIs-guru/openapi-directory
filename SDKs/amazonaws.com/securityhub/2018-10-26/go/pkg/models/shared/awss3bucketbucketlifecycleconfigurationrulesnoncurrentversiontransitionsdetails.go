package shared

// AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails
// A transition rule that describes when noncurrent objects transition to a specified storage class.
type AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails struct {
	Days         *int64  `json:"Days,omitempty"`
	StorageClass *string `json:"StorageClass,omitempty"`
}
