package shared

import (
	"time"
)

type BotAliasMetadata struct {
	BotName          *string                   `json:"botName"`
	BotVersion       *string                   `json:"botVersion"`
	Checksum         *string                   `json:"checksum"`
	ConversationLogs *ConversationLogsResponse `json:"conversationLogs"`
	CreatedDate      *time.Time                `json:"createdDate"`
	Description      *string                   `json:"description"`
	LastUpdatedDate  *time.Time                `json:"lastUpdatedDate"`
	Name             *string                   `json:"name"`
}
