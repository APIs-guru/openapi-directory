package shared

// UserFacingMessage
// Provides a user-facing message with locale info. The maximum message length is 4096 characters.
type UserFacingMessage struct {
	DefaultMessage    *string           `json:"defaultMessage,omitempty"`
	LocalizedMessages map[string]string `json:"localizedMessages,omitempty"`
}
