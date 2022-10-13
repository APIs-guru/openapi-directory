package shared

type UpdateDistributionRequest struct {
	CacheBehaviorSettings *CacheSettings         `json:"cacheBehaviorSettings"`
	CacheBehaviors        []CacheBehaviorPerPath `json:"cacheBehaviors"`
	DefaultCacheBehavior  *CacheBehavior         `json:"defaultCacheBehavior"`
	DistributionName      string                 `json:"distributionName"`
	IsEnabled             *bool                  `json:"isEnabled"`
	Origin                *InputOrigin           `json:"origin"`
}
