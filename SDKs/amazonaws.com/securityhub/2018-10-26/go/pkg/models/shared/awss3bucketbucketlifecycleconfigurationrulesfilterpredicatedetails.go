package shared

type AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails struct {
	Operands []AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails `json:"Operands"`
	Prefix   *string                                                                      `json:"Prefix"`
	Tag      *AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails       `json:"Tag"`
	Type     *string                                                                      `json:"Type"`
}
