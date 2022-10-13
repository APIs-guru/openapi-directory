package shared

type AwsCloudFrontDistributionOriginItem struct {
	DomainName     *string                                        `json:"DomainName"`
	ID             *string                                        `json:"Id"`
	OriginPath     *string                                        `json:"OriginPath"`
	S3OriginConfig *AwsCloudFrontDistributionOriginS3OriginConfig `json:"S3OriginConfig"`
}
