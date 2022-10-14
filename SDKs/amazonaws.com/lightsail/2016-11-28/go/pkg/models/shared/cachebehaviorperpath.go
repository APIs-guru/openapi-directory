package shared

type CacheBehaviorPerPath struct {
	Behavior *BehaviorEnumEnum `json:"behavior,omitempty"`
	Path     *string           `json:"path,omitempty"`
}
