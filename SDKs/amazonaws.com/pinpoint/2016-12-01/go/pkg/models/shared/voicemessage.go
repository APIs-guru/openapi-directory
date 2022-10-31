package shared

type VoiceMessage struct {
	Body              *string             `json:"Body,omitempty"`
	LanguageCode      *string             `json:"LanguageCode,omitempty"`
	OriginationNumber *string             `json:"OriginationNumber,omitempty"`
	Substitutions     map[string][]string `json:"Substitutions,omitempty"`
	VoiceID           *string             `json:"VoiceId,omitempty"`
}
