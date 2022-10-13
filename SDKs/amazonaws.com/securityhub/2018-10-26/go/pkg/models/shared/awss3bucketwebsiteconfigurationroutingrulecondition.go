package shared

type AwsS3BucketWebsiteConfigurationRoutingRuleCondition struct {
	HTTPErrorCodeReturnedEquals *string `json:"HttpErrorCodeReturnedEquals"`
	KeyPrefixEquals             *string `json:"KeyPrefixEquals"`
}
