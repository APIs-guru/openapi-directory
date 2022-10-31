package shared

import (
	"time"
)

type LightsailDistribution struct {
	AbleToUpdateBundle     *bool                  `json:"ableToUpdateBundle,omitempty"`
	AlternativeDomainNames []string               `json:"alternativeDomainNames,omitempty"`
	Arn                    *string                `json:"arn,omitempty"`
	BundleID               *string                `json:"bundleId,omitempty"`
	CacheBehaviorSettings  *CacheSettings         `json:"cacheBehaviorSettings,omitempty"`
	CacheBehaviors         []CacheBehaviorPerPath `json:"cacheBehaviors,omitempty"`
	CertificateName        *string                `json:"certificateName,omitempty"`
	CreatedAt              *time.Time             `json:"createdAt,omitempty"`
	DefaultCacheBehavior   *CacheBehavior         `json:"defaultCacheBehavior,omitempty"`
	DomainName             *string                `json:"domainName,omitempty"`
	IPAddressType          *IPAddressTypeEnum     `json:"ipAddressType,omitempty"`
	IsEnabled              *bool                  `json:"isEnabled,omitempty"`
	Location               *ResourceLocation      `json:"location,omitempty"`
	Name                   *string                `json:"name,omitempty"`
	Origin                 *Origin                `json:"origin,omitempty"`
	OriginPublicDNS        *string                `json:"originPublicDNS,omitempty"`
	ResourceType           *ResourceTypeEnum      `json:"resourceType,omitempty"`
	Status                 *string                `json:"status,omitempty"`
	SupportCode            *string                `json:"supportCode,omitempty"`
	Tags                   []Tag                  `json:"tags,omitempty"`
}
