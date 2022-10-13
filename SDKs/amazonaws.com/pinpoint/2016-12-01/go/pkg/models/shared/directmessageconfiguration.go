package shared

type DirectMessageConfiguration struct {
	AdmMessage                     *AdmMessage                     `json:"ADMMessage"`
	ApnsMessage                    *ApnsMessage                    `json:"APNSMessage"`
	BaiduMessage                   *BaiduMessage                   `json:"BaiduMessage"`
	DefaultMessage                 *DefaultMessage                 `json:"DefaultMessage"`
	DefaultPushNotificationMessage *DefaultPushNotificationMessage `json:"DefaultPushNotificationMessage"`
	EmailMessage                   *EmailMessage                   `json:"EmailMessage"`
	GcmMessage                     *GcmMessage                     `json:"GCMMessage"`
	SmsMessage                     *SmsMessage                     `json:"SMSMessage"`
	VoiceMessage                   *VoiceMessage                   `json:"VoiceMessage"`
}
