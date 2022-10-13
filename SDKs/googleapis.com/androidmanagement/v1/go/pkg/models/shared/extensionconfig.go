package shared

type ExtensionConfig struct {
	NotificationReceiver         *string  `json:"notificationReceiver"`
	SigningKeyFingerprintsSha256 []string `json:"signingKeyFingerprintsSha256"`
}
