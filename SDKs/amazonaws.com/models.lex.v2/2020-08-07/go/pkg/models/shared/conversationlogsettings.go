package shared

// ConversationLogSettings
// Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
type ConversationLogSettings struct {
	AudioLogSettings []AudioLogSetting `json:"audioLogSettings,omitempty"`
	TextLogSettings  []TextLogSetting  `json:"textLogSettings,omitempty"`
}
