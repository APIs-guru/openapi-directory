package shared



type AwsCloudFrontDistributionOriginItem struct {
    DomainName *string `json:"DomainName,omitempty"`
    ID *string `json:"Id,omitempty"`
    OriginPath *string `json:"OriginPath,omitempty"`
    S3OriginConfig *AwsCloudFrontDistributionOriginS3OriginConfig `json:"S3OriginConfig,omitempty"`
    
}

