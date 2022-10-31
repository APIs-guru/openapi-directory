package shared

type GetEmailIdentityResponse struct {
	ConfigurationSetName     *string             `json:"ConfigurationSetName,omitempty"`
	DkimAttributes           *DkimAttributes     `json:"DkimAttributes,omitempty"`
	FeedbackForwardingStatus *bool               `json:"FeedbackForwardingStatus,omitempty"`
	IdentityType             *IdentityTypeEnum   `json:"IdentityType,omitempty"`
	MailFromAttributes       *MailFromAttributes `json:"MailFromAttributes,omitempty"`
	Policies                 map[string]string   `json:"Policies,omitempty"`
	Tags                     []Tag               `json:"Tags,omitempty"`
	VerifiedForSendingStatus *bool               `json:"VerifiedForSendingStatus,omitempty"`
}
