package shared

import (
"time")

type CreateBotVersionResponse struct {
    BotID *string `json:"botId,omitempty"`
    BotStatus *BotStatusEnum `json:"botStatus,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    BotVersionLocaleSpecification map[string]BotVersionLocaleDetails `json:"botVersionLocaleSpecification,omitempty"`
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    Description *string `json:"description,omitempty"`
    
}

