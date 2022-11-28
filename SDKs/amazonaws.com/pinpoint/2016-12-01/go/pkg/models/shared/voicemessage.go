package shared

// VoiceMessage
// Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.
type VoiceMessage struct {
	Body              *string             `json:"Body,omitempty"`
	LanguageCode      *string             `json:"LanguageCode,omitempty"`
	OriginationNumber *string             `json:"OriginationNumber,omitempty"`
	Substitutions     map[string][]string `json:"Substitutions,omitempty"`
	VoiceID           *string             `json:"VoiceId,omitempty"`
}
