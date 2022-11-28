package shared

// AwsCloudFrontDistributionLogging
// A complex type that controls whether access logs are written for the distribution.
type AwsCloudFrontDistributionLogging struct {
	Bucket         *string `json:"Bucket,omitempty"`
	Enabled        *bool   `json:"Enabled,omitempty"`
	IncludeCookies *bool   `json:"IncludeCookies,omitempty"`
	Prefix         *string `json:"Prefix,omitempty"`
}
