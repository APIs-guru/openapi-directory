package shared

import (
	"time"
)

type DescribeBotVersionResponse struct {
	BotID                   *string        `json:"botId"`
	BotName                 *string        `json:"botName"`
	BotStatus               *BotStatusEnum `json:"botStatus"`
	BotVersion              *string        `json:"botVersion"`
	CreationDateTime        *time.Time     `json:"creationDateTime"`
	DataPrivacy             *DataPrivacy   `json:"dataPrivacy"`
	Description             *string        `json:"description"`
	FailureReasons          []string       `json:"failureReasons"`
	IdleSessionTTLInSeconds *int64         `json:"idleSessionTTLInSeconds"`
	RoleArn                 *string        `json:"roleArn"`
}
