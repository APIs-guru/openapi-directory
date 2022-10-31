package shared

import (
"time")

type UpdateBotResponse struct {
    BotID *string `json:"botId,omitempty"`
    BotName *string `json:"botName,omitempty"`
    BotStatus *BotStatusEnum `json:"botStatus,omitempty"`
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    DataPrivacy *DataPrivacy `json:"dataPrivacy,omitempty"`
    Description *string `json:"description,omitempty"`
    IdleSessionTTLInSeconds *int64 `json:"idleSessionTTLInSeconds,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

