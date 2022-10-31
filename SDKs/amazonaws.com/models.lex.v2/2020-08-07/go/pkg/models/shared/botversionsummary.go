package shared

import (
"time")

type BotVersionSummary struct {
    BotName *string `json:"botName,omitempty"`
    BotStatus *BotStatusEnum `json:"botStatus,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    Description *string `json:"description,omitempty"`
    
}

