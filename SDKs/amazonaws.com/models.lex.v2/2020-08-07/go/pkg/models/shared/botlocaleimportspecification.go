package shared

// BotLocaleImportSpecification
// Provides the bot locale parameters required for importing a bot locale.
type BotLocaleImportSpecification struct {
	BotID                        string         `json:"botId"`
	BotVersion                   string         `json:"botVersion"`
	LocaleID                     string         `json:"localeId"`
	NluIntentConfidenceThreshold *float64       `json:"nluIntentConfidenceThreshold,omitempty"`
	VoiceSettings                *VoiceSettings `json:"voiceSettings,omitempty"`
}
