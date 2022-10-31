package shared

type BotLocaleImportSpecification struct {
	BotID                        string         `json:"botId"`
	BotVersion                   string         `json:"botVersion"`
	LocaleID                     string         `json:"localeId"`
	NluIntentConfidenceThreshold *float64       `json:"nluIntentConfidenceThreshold,omitempty"`
	VoiceSettings                *VoiceSettings `json:"voiceSettings,omitempty"`
}
