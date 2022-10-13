package shared

type AwsCloudFrontDistributionDetails struct {
	CacheBehaviors       *AwsCloudFrontDistributionCacheBehaviors       `json:"CacheBehaviors"`
	DefaultCacheBehavior *AwsCloudFrontDistributionDefaultCacheBehavior `json:"DefaultCacheBehavior"`
	DefaultRootObject    *string                                        `json:"DefaultRootObject"`
	DomainName           *string                                        `json:"DomainName"`
	ETag                 *string                                        `json:"ETag"`
	LastModifiedTime     *string                                        `json:"LastModifiedTime"`
	Logging              *AwsCloudFrontDistributionLogging              `json:"Logging"`
	OriginGroups         *AwsCloudFrontDistributionOriginGroups         `json:"OriginGroups"`
	Origins              *AwsCloudFrontDistributionOrigins              `json:"Origins"`
	Status               *string                                        `json:"Status"`
	WebACLID             *string                                        `json:"WebAclId"`
}
