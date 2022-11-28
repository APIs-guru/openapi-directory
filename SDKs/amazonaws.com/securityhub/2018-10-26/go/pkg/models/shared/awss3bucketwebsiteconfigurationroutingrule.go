package shared

// AwsS3BucketWebsiteConfigurationRoutingRule
// A rule for redirecting requests to the website.
type AwsS3BucketWebsiteConfigurationRoutingRule struct {
	Condition *AwsS3BucketWebsiteConfigurationRoutingRuleCondition `json:"Condition,omitempty"`
	Redirect  *AwsS3BucketWebsiteConfigurationRoutingRuleRedirect  `json:"Redirect,omitempty"`
}
