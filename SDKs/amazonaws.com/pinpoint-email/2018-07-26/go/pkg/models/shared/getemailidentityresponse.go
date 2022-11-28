package shared

// GetEmailIdentityResponse
// Details about an email identity.
type GetEmailIdentityResponse struct {
	DkimAttributes           *DkimAttributes     `json:"DkimAttributes,omitempty"`
	FeedbackForwardingStatus *bool               `json:"FeedbackForwardingStatus,omitempty"`
	IdentityType             *IdentityTypeEnum   `json:"IdentityType,omitempty"`
	MailFromAttributes       *MailFromAttributes `json:"MailFromAttributes,omitempty"`
	Tags                     []Tag               `json:"Tags,omitempty"`
	VerifiedForSendingStatus *bool               `json:"VerifiedForSendingStatus,omitempty"`
}
