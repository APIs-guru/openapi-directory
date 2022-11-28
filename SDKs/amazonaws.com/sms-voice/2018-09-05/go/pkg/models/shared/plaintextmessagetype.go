package shared

// PlainTextMessageType
// An object that defines a message that contains unformatted text.
type PlainTextMessageType struct {
	LanguageCode *string `json:"LanguageCode,omitempty"`
	Text         *string `json:"Text,omitempty"`
	VoiceID      *string `json:"VoiceId,omitempty"`
}
