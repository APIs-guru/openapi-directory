package shared

type GetEmailIdentityResponse struct {
	ConfigurationSetName     *string             `json:"ConfigurationSetName"`
	DkimAttributes           *DkimAttributes     `json:"DkimAttributes"`
	FeedbackForwardingStatus *bool               `json:"FeedbackForwardingStatus"`
	IdentityType             *IdentityTypeEnum   `json:"IdentityType"`
	MailFromAttributes       *MailFromAttributes `json:"MailFromAttributes"`
	Policies                 map[string]string   `json:"Policies"`
	Tags                     []Tag               `json:"Tags"`
	VerifiedForSendingStatus *bool               `json:"VerifiedForSendingStatus"`
}
