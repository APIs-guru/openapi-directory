package shared

import (
"time")

type BotSummary struct {
    BotID *string `json:"botId,omitempty"`
    BotName *string `json:"botName,omitempty"`
    BotStatus *BotStatusEnum `json:"botStatus,omitempty"`
    Description *string `json:"description,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    LatestBotVersion *string `json:"latestBotVersion,omitempty"`
    
}

