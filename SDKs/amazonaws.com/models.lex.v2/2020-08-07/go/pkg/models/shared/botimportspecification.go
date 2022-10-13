package shared

type BotImportSpecification struct {
	BotName                 string            `json:"botName"`
	BotTags                 map[string]string `json:"botTags"`
	DataPrivacy             DataPrivacy       `json:"dataPrivacy"`
	IdleSessionTTLInSeconds *int64            `json:"idleSessionTTLInSeconds"`
	RoleArn                 string            `json:"roleArn"`
	TestBotAliasTags        map[string]string `json:"testBotAliasTags"`
}
