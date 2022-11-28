package shared

// MultiModelConfig
// Specifies additional configuration for hosting multi-model endpoints.
type MultiModelConfig struct {
	ModelCacheSetting *ModelCacheSettingEnum `json:"ModelCacheSetting,omitempty"`
}
