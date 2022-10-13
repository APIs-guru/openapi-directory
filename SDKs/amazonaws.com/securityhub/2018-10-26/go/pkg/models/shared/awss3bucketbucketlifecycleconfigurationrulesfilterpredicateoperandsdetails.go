package shared

type AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails struct {
	Prefix *string                                                                        `json:"Prefix"`
	Tag    *AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails `json:"Tag"`
	Type   *string                                                                        `json:"Type"`
}
