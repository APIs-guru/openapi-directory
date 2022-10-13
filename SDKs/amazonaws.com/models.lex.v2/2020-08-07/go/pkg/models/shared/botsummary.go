package shared

import (
	"time"
)

type BotSummary struct {
	BotID               *string        `json:"botId"`
	BotName             *string        `json:"botName"`
	BotStatus           *BotStatusEnum `json:"botStatus"`
	Description         *string        `json:"description"`
	LastUpdatedDateTime *time.Time     `json:"lastUpdatedDateTime"`
	LatestBotVersion    *string        `json:"latestBotVersion"`
}
