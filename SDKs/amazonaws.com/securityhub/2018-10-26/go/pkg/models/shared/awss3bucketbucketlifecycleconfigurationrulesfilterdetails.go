package shared

// AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails
// Identifies the objects that a rule applies to.
type AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails struct {
	Predicate *AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails `json:"Predicate,omitempty"`
}
