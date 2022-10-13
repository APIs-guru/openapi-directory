package shared

import (
	"time"
)

type CreateBotVersionResponse struct {
	BotID                         *string                            `json:"botId"`
	BotStatus                     *BotStatusEnum                     `json:"botStatus"`
	BotVersion                    *string                            `json:"botVersion"`
	BotVersionLocaleSpecification map[string]BotVersionLocaleDetails `json:"botVersionLocaleSpecification"`
	CreationDateTime              *time.Time                         `json:"creationDateTime"`
	Description                   *string                            `json:"description"`
}
