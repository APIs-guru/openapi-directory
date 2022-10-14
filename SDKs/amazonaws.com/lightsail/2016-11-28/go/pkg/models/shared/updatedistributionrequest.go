package shared

type UpdateDistributionRequest struct {
	CacheBehaviorSettings *CacheSettings         `json:"cacheBehaviorSettings,omitempty"`
	CacheBehaviors        []CacheBehaviorPerPath `json:"cacheBehaviors,omitempty"`
	DefaultCacheBehavior  *CacheBehavior         `json:"defaultCacheBehavior,omitempty"`
	DistributionName      string                 `json:"distributionName"`
	IsEnabled             *bool                  `json:"isEnabled,omitempty"`
	Origin                *InputOrigin           `json:"origin,omitempty"`
}
