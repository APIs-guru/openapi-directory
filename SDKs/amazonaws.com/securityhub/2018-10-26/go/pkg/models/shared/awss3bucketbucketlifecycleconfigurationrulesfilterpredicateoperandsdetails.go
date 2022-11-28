package shared

// AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
// A value to use for the filter.
type AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails struct {
	Prefix *string                                                                        `json:"Prefix,omitempty"`
	Tag    *AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails `json:"Tag,omitempty"`
	Type   *string                                                                        `json:"Type,omitempty"`
}
