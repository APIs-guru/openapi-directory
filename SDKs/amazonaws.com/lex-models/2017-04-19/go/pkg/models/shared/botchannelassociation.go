package shared

import (
	"time"
)

type BotChannelAssociation struct {
	BotAlias         *string            `json:"botAlias"`
	BotConfiguration map[string]string  `json:"botConfiguration"`
	BotName          *string            `json:"botName"`
	CreatedDate      *time.Time         `json:"createdDate"`
	Description      *string            `json:"description"`
	FailureReason    *string            `json:"failureReason"`
	Name             *string            `json:"name"`
	Status           *ChannelStatusEnum `json:"status"`
	Type             *ChannelTypeEnum   `json:"type"`
}
