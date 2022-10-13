package shared

type AwsS3BucketWebsiteConfigurationRoutingRule struct {
	Condition *AwsS3BucketWebsiteConfigurationRoutingRuleCondition `json:"Condition"`
	Redirect  *AwsS3BucketWebsiteConfigurationRoutingRuleRedirect  `json:"Redirect"`
}
