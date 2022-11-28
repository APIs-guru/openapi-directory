package shared

// SendVoiceMessageResponse
// An object that that contains the Message ID of a Voice message that was sent successfully.
type SendVoiceMessageResponse struct {
	MessageID *string `json:"MessageId,omitempty"`
}
