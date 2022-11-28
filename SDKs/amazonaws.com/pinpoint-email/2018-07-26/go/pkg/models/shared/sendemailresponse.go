package shared

// SendEmailResponse
// A unique message ID that you receive when Amazon Pinpoint accepts an email for sending.
type SendEmailResponse struct {
	MessageID *string `json:"MessageId,omitempty"`
}
