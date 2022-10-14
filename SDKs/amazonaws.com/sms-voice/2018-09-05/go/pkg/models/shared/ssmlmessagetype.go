package shared

type SsmlMessageType struct {
	LanguageCode *string `json:"LanguageCode,omitempty"`
	Text         *string `json:"Text,omitempty"`
	VoiceID      *string `json:"VoiceId,omitempty"`
}
