package shared

type AwsCloudFrontDistributionLogging struct {
	Bucket         *string `json:"Bucket"`
	Enabled        *bool   `json:"Enabled"`
	IncludeCookies *bool   `json:"IncludeCookies"`
	Prefix         *string `json:"Prefix"`
}
