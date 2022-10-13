package shared

import (
	"time"
)

type LightsailDistribution struct {
	AbleToUpdateBundle     *bool                  `json:"ableToUpdateBundle"`
	AlternativeDomainNames []string               `json:"alternativeDomainNames"`
	Arn                    *string                `json:"arn"`
	BundleID               *string                `json:"bundleId"`
	CacheBehaviorSettings  *CacheSettings         `json:"cacheBehaviorSettings"`
	CacheBehaviors         []CacheBehaviorPerPath `json:"cacheBehaviors"`
	CertificateName        *string                `json:"certificateName"`
	CreatedAt              *time.Time             `json:"createdAt"`
	DefaultCacheBehavior   *CacheBehavior         `json:"defaultCacheBehavior"`
	DomainName             *string                `json:"domainName"`
	IPAddressType          *IPAddressTypeEnum     `json:"ipAddressType"`
	IsEnabled              *bool                  `json:"isEnabled"`
	Location               *ResourceLocation      `json:"location"`
	Name                   *string                `json:"name"`
	Origin                 *Origin                `json:"origin"`
	OriginPublicDNS        *string                `json:"originPublicDNS"`
	ResourceType           *ResourceTypeEnum      `json:"resourceType"`
	Status                 *string                `json:"status"`
	SupportCode            *string                `json:"supportCode"`
	Tags                   []Tag                  `json:"tags"`
}
