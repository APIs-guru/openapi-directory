package shared

type VoiceMessage struct {
	Body              *string             `json:"Body"`
	LanguageCode      *string             `json:"LanguageCode"`
	OriginationNumber *string             `json:"OriginationNumber"`
	Substitutions     map[string][]string `json:"Substitutions"`
	VoiceID           *string             `json:"VoiceId"`
}
