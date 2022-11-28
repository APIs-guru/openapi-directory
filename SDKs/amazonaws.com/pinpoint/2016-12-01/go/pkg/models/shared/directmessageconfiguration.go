package shared

// DirectMessageConfiguration
// Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
type DirectMessageConfiguration struct {
	AdmMessage                     *AdmMessage                     `json:"ADMMessage,omitempty"`
	ApnsMessage                    *ApnsMessage                    `json:"APNSMessage,omitempty"`
	BaiduMessage                   *BaiduMessage                   `json:"BaiduMessage,omitempty"`
	DefaultMessage                 *DefaultMessage                 `json:"DefaultMessage,omitempty"`
	DefaultPushNotificationMessage *DefaultPushNotificationMessage `json:"DefaultPushNotificationMessage,omitempty"`
	EmailMessage                   *EmailMessage                   `json:"EmailMessage,omitempty"`
	GcmMessage                     *GcmMessage                     `json:"GCMMessage,omitempty"`
	SmsMessage                     *SmsMessage                     `json:"SMSMessage,omitempty"`
	VoiceMessage                   *VoiceMessage                   `json:"VoiceMessage,omitempty"`
}
