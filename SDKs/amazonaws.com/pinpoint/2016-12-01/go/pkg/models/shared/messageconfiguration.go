package shared

type MessageConfiguration struct {
	AdmMessage     *Message               `json:"ADMMessage"`
	ApnsMessage    *Message               `json:"APNSMessage"`
	BaiduMessage   *Message               `json:"BaiduMessage"`
	CustomMessage  *CampaignCustomMessage `json:"CustomMessage"`
	DefaultMessage *Message               `json:"DefaultMessage"`
	EmailMessage   *CampaignEmailMessage  `json:"EmailMessage"`
	GcmMessage     *Message               `json:"GCMMessage"`
	InAppMessage   *CampaignInAppMessage  `json:"InAppMessage"`
	SmsMessage     *CampaignSmsMessage    `json:"SMSMessage"`
}
