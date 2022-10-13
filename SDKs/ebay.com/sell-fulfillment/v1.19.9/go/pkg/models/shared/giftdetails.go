package shared

type GiftDetails struct {
	Message        *string `json:"message"`
	RecipientEmail *string `json:"recipientEmail"`
	SenderName     *string `json:"senderName"`
}
