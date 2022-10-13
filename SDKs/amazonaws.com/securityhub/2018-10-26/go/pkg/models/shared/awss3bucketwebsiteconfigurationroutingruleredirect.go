package shared

type AwsS3BucketWebsiteConfigurationRoutingRuleRedirect struct {
	Hostname             *string `json:"Hostname"`
	HTTPRedirectCode     *string `json:"HttpRedirectCode"`
	Protocol             *string `json:"Protocol"`
	ReplaceKeyPrefixWith *string `json:"ReplaceKeyPrefixWith"`
	ReplaceKeyWith       *string `json:"ReplaceKeyWith"`
}
