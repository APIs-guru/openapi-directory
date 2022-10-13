package shared

type OnlineStoreConfig struct {
	EnableOnlineStore *bool                      `json:"EnableOnlineStore"`
	SecurityConfig    *OnlineStoreSecurityConfig `json:"SecurityConfig"`
}
