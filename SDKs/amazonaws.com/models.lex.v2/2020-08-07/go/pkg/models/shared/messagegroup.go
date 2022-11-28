package shared

// MessageGroup
// Provides one or more messages that Amazon Lex should send to the user.
type MessageGroup struct {
	Message    Message   `json:"message"`
	Variations []Message `json:"variations,omitempty"`
}
