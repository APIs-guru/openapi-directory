package shared

type AwsCloudFrontDistributionDetails struct {
	CacheBehaviors       *AwsCloudFrontDistributionCacheBehaviors       `json:"CacheBehaviors,omitempty"`
	DefaultCacheBehavior *AwsCloudFrontDistributionDefaultCacheBehavior `json:"DefaultCacheBehavior,omitempty"`
	DefaultRootObject    *string                                        `json:"DefaultRootObject,omitempty"`
	DomainName           *string                                        `json:"DomainName,omitempty"`
	ETag                 *string                                        `json:"ETag,omitempty"`
	LastModifiedTime     *string                                        `json:"LastModifiedTime,omitempty"`
	Logging              *AwsCloudFrontDistributionLogging              `json:"Logging,omitempty"`
	OriginGroups         *AwsCloudFrontDistributionOriginGroups         `json:"OriginGroups,omitempty"`
	Origins              *AwsCloudFrontDistributionOrigins              `json:"Origins,omitempty"`
	Status               *string                                        `json:"Status,omitempty"`
	WebACLID             *string                                        `json:"WebAclId,omitempty"`
}
