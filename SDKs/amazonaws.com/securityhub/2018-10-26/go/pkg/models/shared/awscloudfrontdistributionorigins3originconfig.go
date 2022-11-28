package shared

// AwsCloudFrontDistributionOriginS3OriginConfig
// Information about an origin that is an S3 bucket that is not configured with static website hosting.
type AwsCloudFrontDistributionOriginS3OriginConfig struct {
	OriginAccessIdentity *string `json:"OriginAccessIdentity,omitempty"`
}
