package shared

// AwsCloudFrontDistributionOriginItem
// A complex type that describes the S3 bucket, HTTP server (for example, a web server), AWS Elemental MediaStore, or other server from which CloudFront gets your files.
type AwsCloudFrontDistributionOriginItem struct {
	DomainName     *string                                        `json:"DomainName,omitempty"`
	ID             *string                                        `json:"Id,omitempty"`
	OriginPath     *string                                        `json:"OriginPath,omitempty"`
	S3OriginConfig *AwsCloudFrontDistributionOriginS3OriginConfig `json:"S3OriginConfig,omitempty"`
}
