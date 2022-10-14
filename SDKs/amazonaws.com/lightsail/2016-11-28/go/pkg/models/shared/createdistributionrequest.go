package shared

type CreateDistributionRequest struct {
	BundleID              string                 `json:"bundleId"`
	CacheBehaviorSettings *CacheSettings         `json:"cacheBehaviorSettings,omitempty"`
	CacheBehaviors        []CacheBehaviorPerPath `json:"cacheBehaviors,omitempty"`
	DefaultCacheBehavior  CacheBehavior          `json:"defaultCacheBehavior"`
	DistributionName      string                 `json:"distributionName"`
	IPAddressType         *IPAddressTypeEnum     `json:"ipAddressType,omitempty"`
	Origin                InputOrigin            `json:"origin"`
	Tags                  []Tag                  `json:"tags,omitempty"`
}
