package shared

// SuppressedDestinationAttributes
// An object that contains additional attributes that are related an email address that is on the suppression list for your account.
type SuppressedDestinationAttributes struct {
	FeedbackID *string `json:"FeedbackId,omitempty"`
	MessageID  *string `json:"MessageId,omitempty"`
}
