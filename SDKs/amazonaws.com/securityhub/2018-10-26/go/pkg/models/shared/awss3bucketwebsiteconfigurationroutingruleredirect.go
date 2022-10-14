package shared

type AwsS3BucketWebsiteConfigurationRoutingRuleRedirect struct {
	Hostname             *string `json:"Hostname,omitempty"`
	HTTPRedirectCode     *string `json:"HttpRedirectCode,omitempty"`
	Protocol             *string `json:"Protocol,omitempty"`
	ReplaceKeyPrefixWith *string `json:"ReplaceKeyPrefixWith,omitempty"`
	ReplaceKeyWith       *string `json:"ReplaceKeyWith,omitempty"`
}
