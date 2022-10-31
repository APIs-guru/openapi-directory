package shared



type AwsS3BucketWebsiteConfiguration struct {
    ErrorDocument *string `json:"ErrorDocument,omitempty"`
    IndexDocumentSuffix *string `json:"IndexDocumentSuffix,omitempty"`
    RedirectAllRequestsTo *AwsS3BucketWebsiteConfigurationRedirectTo `json:"RedirectAllRequestsTo,omitempty"`
    RoutingRules []AwsS3BucketWebsiteConfigurationRoutingRule `json:"RoutingRules,omitempty"`
    
}

