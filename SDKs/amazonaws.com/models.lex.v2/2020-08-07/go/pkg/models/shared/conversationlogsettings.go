package shared

type ConversationLogSettings struct {
	AudioLogSettings []AudioLogSetting `json:"audioLogSettings,omitempty"`
	TextLogSettings  []TextLogSetting  `json:"textLogSettings,omitempty"`
}
