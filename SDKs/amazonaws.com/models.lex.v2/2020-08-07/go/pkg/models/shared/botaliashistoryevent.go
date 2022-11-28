package shared

import (
	"time"
)

// BotAliasHistoryEvent
// Provides a record of an event that affects a bot alias. For example, when the version of a bot that the alias points to changes.
type BotAliasHistoryEvent struct {
	BotVersion *string    `json:"botVersion,omitempty"`
	EndDate    *time.Time `json:"endDate,omitempty"`
	StartDate  *time.Time `json:"startDate,omitempty"`
}
