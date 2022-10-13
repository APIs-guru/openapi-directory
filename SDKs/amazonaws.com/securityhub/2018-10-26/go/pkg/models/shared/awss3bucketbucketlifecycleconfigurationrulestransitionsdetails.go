package shared

type AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails struct {
	Date         *string `json:"Date"`
	Days         *int64  `json:"Days"`
	StorageClass *string `json:"StorageClass"`
}
