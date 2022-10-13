package shared

type CreateDistributionRequest struct {
	BundleID              string                 `json:"bundleId"`
	CacheBehaviorSettings *CacheSettings         `json:"cacheBehaviorSettings"`
	CacheBehaviors        []CacheBehaviorPerPath `json:"cacheBehaviors"`
	DefaultCacheBehavior  CacheBehavior          `json:"defaultCacheBehavior"`
	DistributionName      string                 `json:"distributionName"`
	IPAddressType         *IPAddressTypeEnum     `json:"ipAddressType"`
	Origin                InputOrigin            `json:"origin"`
	Tags                  []Tag                  `json:"tags"`
}
