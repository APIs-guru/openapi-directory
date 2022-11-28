package shared

import (
	"time"
)

// BotSummary
// Summary information about a bot returned by the <a>ListBots</a> operation.
type BotSummary struct {
	BotID               *string        `json:"botId,omitempty"`
	BotName             *string        `json:"botName,omitempty"`
	BotStatus           *BotStatusEnum `json:"botStatus,omitempty"`
	Description         *string        `json:"description,omitempty"`
	LastUpdatedDateTime *time.Time     `json:"lastUpdatedDateTime,omitempty"`
	LatestBotVersion    *string        `json:"latestBotVersion,omitempty"`
}
