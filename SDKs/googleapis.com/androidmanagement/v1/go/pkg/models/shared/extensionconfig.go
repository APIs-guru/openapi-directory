package shared

// ExtensionConfig
// Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline.
type ExtensionConfig struct {
	NotificationReceiver         *string  `json:"notificationReceiver,omitempty"`
	SigningKeyFingerprintsSha256 []string `json:"signingKeyFingerprintsSha256,omitempty"`
}
