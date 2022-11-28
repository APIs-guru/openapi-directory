package shared

// AwsS3BucketWebsiteConfigurationRoutingRuleCondition
// The condition that must be met in order to apply the routing rule.
type AwsS3BucketWebsiteConfigurationRoutingRuleCondition struct {
	HTTPErrorCodeReturnedEquals *string `json:"HttpErrorCodeReturnedEquals,omitempty"`
	KeyPrefixEquals             *string `json:"KeyPrefixEquals,omitempty"`
}
