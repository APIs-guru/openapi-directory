package shared

type AwsCloudFrontDistributionLogging struct {
	Bucket         *string `json:"Bucket,omitempty"`
	Enabled        *bool   `json:"Enabled,omitempty"`
	IncludeCookies *bool   `json:"IncludeCookies,omitempty"`
	Prefix         *string `json:"Prefix,omitempty"`
}
