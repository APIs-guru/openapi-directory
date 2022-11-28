package shared

// GiftDetails
// This type contains information about a digital gift card line item that was purchased as a gift, and sent to the recipient by email.
type GiftDetails struct {
	Message        *string `json:"message,omitempty"`
	RecipientEmail *string `json:"recipientEmail,omitempty"`
	SenderName     *string `json:"senderName,omitempty"`
}
