package shared

type ExtensionConfig struct {
	NotificationReceiver         *string  `json:"notificationReceiver,omitempty"`
	SigningKeyFingerprintsSha256 []string `json:"signingKeyFingerprintsSha256,omitempty"`
}
