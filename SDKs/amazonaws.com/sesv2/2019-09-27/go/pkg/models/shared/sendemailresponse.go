package shared

// SendEmailResponse
// A unique message ID that you receive when an email is accepted for sending.
type SendEmailResponse struct {
	MessageID *string `json:"MessageId,omitempty"`
}
