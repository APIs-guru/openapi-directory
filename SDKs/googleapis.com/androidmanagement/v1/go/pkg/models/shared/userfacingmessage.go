package shared

type UserFacingMessage struct {
	DefaultMessage    *string           `json:"defaultMessage,omitempty"`
	LocalizedMessages map[string]string `json:"localizedMessages,omitempty"`
}
