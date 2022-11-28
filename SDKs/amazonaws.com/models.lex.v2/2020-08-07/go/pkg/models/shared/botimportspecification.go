package shared

// BotImportSpecification
// Provides the bot parameters required for importing a bot.
type BotImportSpecification struct {
	BotName                 string            `json:"botName"`
	BotTags                 map[string]string `json:"botTags,omitempty"`
	DataPrivacy             DataPrivacy       `json:"dataPrivacy"`
	IdleSessionTTLInSeconds *int64            `json:"idleSessionTTLInSeconds,omitempty"`
	RoleArn                 string            `json:"roleArn"`
	TestBotAliasTags        map[string]string `json:"testBotAliasTags,omitempty"`
}
