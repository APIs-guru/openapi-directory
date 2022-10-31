package shared

type GiftDetails struct {
	Message        *string `json:"message,omitempty"`
	RecipientEmail *string `json:"recipientEmail,omitempty"`
	SenderName     *string `json:"senderName,omitempty"`
}
