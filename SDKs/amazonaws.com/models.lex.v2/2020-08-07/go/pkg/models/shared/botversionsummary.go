package shared

import (
	"time"
)

type BotVersionSummary struct {
	BotName          *string        `json:"botName"`
	BotStatus        *BotStatusEnum `json:"botStatus"`
	BotVersion       *string        `json:"botVersion"`
	CreationDateTime *time.Time     `json:"creationDateTime"`
	Description      *string        `json:"description"`
}
