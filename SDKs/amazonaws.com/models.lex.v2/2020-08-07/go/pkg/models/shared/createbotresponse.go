package shared

import (
	"time"
)

type CreateBotResponse struct {
	BotID                   *string           `json:"botId"`
	BotName                 *string           `json:"botName"`
	BotStatus               *BotStatusEnum    `json:"botStatus"`
	BotTags                 map[string]string `json:"botTags"`
	CreationDateTime        *time.Time        `json:"creationDateTime"`
	DataPrivacy             *DataPrivacy      `json:"dataPrivacy"`
	Description             *string           `json:"description"`
	IdleSessionTTLInSeconds *int64            `json:"idleSessionTTLInSeconds"`
	RoleArn                 *string           `json:"roleArn"`
	TestBotAliasTags        map[string]string `json:"testBotAliasTags"`
}
