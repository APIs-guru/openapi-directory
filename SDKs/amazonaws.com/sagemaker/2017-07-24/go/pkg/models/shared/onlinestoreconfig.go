package shared

// OnlineStoreConfig
// Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or <code>KMSKeyId</code>, for at rest data encryption. You can turn <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag at General Assembly; the default value is <code>False</code>.
type OnlineStoreConfig struct {
	EnableOnlineStore *bool                      `json:"EnableOnlineStore,omitempty"`
	SecurityConfig    *OnlineStoreSecurityConfig `json:"SecurityConfig,omitempty"`
}
