package shared

type AwsS3BucketWebsiteConfiguration struct {
	ErrorDocument         *string                                      `json:"ErrorDocument"`
	IndexDocumentSuffix   *string                                      `json:"IndexDocumentSuffix"`
	RedirectAllRequestsTo *AwsS3BucketWebsiteConfigurationRedirectTo   `json:"RedirectAllRequestsTo"`
	RoutingRules          []AwsS3BucketWebsiteConfigurationRoutingRule `json:"RoutingRules"`
}
