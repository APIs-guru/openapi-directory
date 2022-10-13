package shared

type GetEmailIdentityResponse struct {
	DkimAttributes           *DkimAttributes     `json:"DkimAttributes"`
	FeedbackForwardingStatus *bool               `json:"FeedbackForwardingStatus"`
	IdentityType             *IdentityTypeEnum   `json:"IdentityType"`
	MailFromAttributes       *MailFromAttributes `json:"MailFromAttributes"`
	Tags                     []Tag               `json:"Tags"`
	VerifiedForSendingStatus *bool               `json:"VerifiedForSendingStatus"`
}
