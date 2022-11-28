package shared

// CacheBehavior
// Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
type CacheBehavior struct {
	Behavior *BehaviorEnumEnum `json:"behavior,omitempty"`
}
