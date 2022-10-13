package shared

type PlainTextMessageType struct {
	LanguageCode *string `json:"LanguageCode"`
	Text         *string `json:"Text"`
	VoiceID      *string `json:"VoiceId"`
}
