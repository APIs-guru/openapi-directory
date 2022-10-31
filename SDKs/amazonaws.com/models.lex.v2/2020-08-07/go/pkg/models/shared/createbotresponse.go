package shared

import (
"time")

type CreateBotResponse struct {
    BotID *string `json:"botId,omitempty"`
    BotName *string `json:"botName,omitempty"`
    BotStatus *BotStatusEnum `json:"botStatus,omitempty"`
    BotTags map[string]string `json:"botTags,omitempty"`
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    DataPrivacy *DataPrivacy `json:"dataPrivacy,omitempty"`
    Description *string `json:"description,omitempty"`
    IdleSessionTTLInSeconds *int64 `json:"idleSessionTTLInSeconds,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    TestBotAliasTags map[string]string `json:"testBotAliasTags,omitempty"`
    
}

