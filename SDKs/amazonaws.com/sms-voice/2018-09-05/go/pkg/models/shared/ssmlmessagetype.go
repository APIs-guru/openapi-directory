package shared

// SsmlMessageType
// An object that defines a message that contains SSML-formatted text.
type SsmlMessageType struct {
	LanguageCode *string `json:"LanguageCode,omitempty"`
	Text         *string `json:"Text,omitempty"`
	VoiceID      *string `json:"VoiceId,omitempty"`
}
