package shared

type MessageConfiguration struct {
	AdmMessage     *Message               `json:"ADMMessage,omitempty"`
	ApnsMessage    *Message               `json:"APNSMessage,omitempty"`
	BaiduMessage   *Message               `json:"BaiduMessage,omitempty"`
	CustomMessage  *CampaignCustomMessage `json:"CustomMessage,omitempty"`
	DefaultMessage *Message               `json:"DefaultMessage,omitempty"`
	EmailMessage   *CampaignEmailMessage  `json:"EmailMessage,omitempty"`
	GcmMessage     *Message               `json:"GCMMessage,omitempty"`
	InAppMessage   *CampaignInAppMessage  `json:"InAppMessage,omitempty"`
	SmsMessage     *CampaignSmsMessage    `json:"SMSMessage,omitempty"`
}
