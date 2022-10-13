package shared

type CacheBehaviorPerPath struct {
	Behavior *BehaviorEnumEnum `json:"behavior"`
	Path     *string           `json:"path"`
}
