package shared

import (
	"time"
)

// BotChannelAssociation
// Represents an association between an Amazon Lex bot and an external messaging platform.
type BotChannelAssociation struct {
	BotAlias         *string            `json:"botAlias,omitempty"`
	BotConfiguration map[string]string  `json:"botConfiguration,omitempty"`
	BotName          *string            `json:"botName,omitempty"`
	CreatedDate      *time.Time         `json:"createdDate,omitempty"`
	Description      *string            `json:"description,omitempty"`
	FailureReason    *string            `json:"failureReason,omitempty"`
	Name             *string            `json:"name,omitempty"`
	Status           *ChannelStatusEnum `json:"status,omitempty"`
	Type             *ChannelTypeEnum   `json:"type,omitempty"`
}
