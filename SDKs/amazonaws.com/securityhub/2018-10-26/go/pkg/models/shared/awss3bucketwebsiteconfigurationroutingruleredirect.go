package shared

// AwsS3BucketWebsiteConfigurationRoutingRuleRedirect
// The rules to redirect the request if the condition in <code>Condition</code> is met.
type AwsS3BucketWebsiteConfigurationRoutingRuleRedirect struct {
	Hostname             *string `json:"Hostname,omitempty"`
	HTTPRedirectCode     *string `json:"HttpRedirectCode,omitempty"`
	Protocol             *string `json:"Protocol,omitempty"`
	ReplaceKeyPrefixWith *string `json:"ReplaceKeyPrefixWith,omitempty"`
	ReplaceKeyWith       *string `json:"ReplaceKeyWith,omitempty"`
}
