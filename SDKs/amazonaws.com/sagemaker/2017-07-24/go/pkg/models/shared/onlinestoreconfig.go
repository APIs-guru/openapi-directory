package shared

type OnlineStoreConfig struct {
	EnableOnlineStore *bool                      `json:"EnableOnlineStore,omitempty"`
	SecurityConfig    *OnlineStoreSecurityConfig `json:"SecurityConfig,omitempty"`
}
