package shared

// AwsS3BucketWebsiteConfigurationRedirectTo
// The redirect behavior for requests to the website.
type AwsS3BucketWebsiteConfigurationRedirectTo struct {
	Hostname *string `json:"Hostname,omitempty"`
	Protocol *string `json:"Protocol,omitempty"`
}
