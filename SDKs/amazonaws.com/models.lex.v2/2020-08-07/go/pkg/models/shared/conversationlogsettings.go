package shared

type ConversationLogSettings struct {
	AudioLogSettings []AudioLogSetting `json:"audioLogSettings"`
	TextLogSettings  []TextLogSetting  `json:"textLogSettings"`
}
