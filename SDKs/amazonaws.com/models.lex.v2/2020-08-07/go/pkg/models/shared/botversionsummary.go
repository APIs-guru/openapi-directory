package shared

import (
	"time"
)

// BotVersionSummary
// Summary information about a bot version returned by the <a>ListBotVersions</a> operation.
type BotVersionSummary struct {
	BotName          *string        `json:"botName,omitempty"`
	BotStatus        *BotStatusEnum `json:"botStatus,omitempty"`
	BotVersion       *string        `json:"botVersion,omitempty"`
	CreationDateTime *time.Time     `json:"creationDateTime,omitempty"`
	Description      *string        `json:"description,omitempty"`
}
