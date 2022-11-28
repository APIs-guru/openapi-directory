package shared

// AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails
// The configuration for the filter.
type AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails struct {
	Operands []AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails `json:"Operands,omitempty"`
	Prefix   *string                                                                      `json:"Prefix,omitempty"`
	Tag      *AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails       `json:"Tag,omitempty"`
	Type     *string                                                                      `json:"Type,omitempty"`
}
