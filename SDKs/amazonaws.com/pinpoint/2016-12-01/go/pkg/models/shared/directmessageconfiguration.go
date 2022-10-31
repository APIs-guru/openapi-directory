package shared



type DirectMessageConfiguration struct {
    AdmMessage *AdmMessage `json:"ADMMessage,omitempty"`
    ApnsMessage *ApnsMessage `json:"APNSMessage,omitempty"`
    BaiduMessage *BaiduMessage `json:"BaiduMessage,omitempty"`
    DefaultMessage *DefaultMessage `json:"DefaultMessage,omitempty"`
    DefaultPushNotificationMessage *DefaultPushNotificationMessage `json:"DefaultPushNotificationMessage,omitempty"`
    EmailMessage *EmailMessage `json:"EmailMessage,omitempty"`
    GcmMessage *GcmMessage `json:"GCMMessage,omitempty"`
    SmsMessage *SmsMessage `json:"SMSMessage,omitempty"`
    VoiceMessage *VoiceMessage `json:"VoiceMessage,omitempty"`
    
}

