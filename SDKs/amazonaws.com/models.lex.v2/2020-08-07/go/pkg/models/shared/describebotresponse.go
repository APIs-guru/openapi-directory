package shared

import (
	"time"
)

type DescribeBotResponse struct {
	BotID                   *string        `json:"botId"`
	BotName                 *string        `json:"botName"`
	BotStatus               *BotStatusEnum `json:"botStatus"`
	CreationDateTime        *time.Time     `json:"creationDateTime"`
	DataPrivacy             *DataPrivacy   `json:"dataPrivacy"`
	Description             *string        `json:"description"`
	IdleSessionTTLInSeconds *int64         `json:"idleSessionTTLInSeconds"`
	LastUpdatedDateTime     *time.Time     `json:"lastUpdatedDateTime"`
	RoleArn                 *string        `json:"roleArn"`
}
