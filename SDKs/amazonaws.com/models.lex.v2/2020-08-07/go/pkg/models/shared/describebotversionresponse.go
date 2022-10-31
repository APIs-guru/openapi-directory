package shared

import (
"time")

type DescribeBotVersionResponse struct {
    BotID *string `json:"botId,omitempty"`
    BotName *string `json:"botName,omitempty"`
    BotStatus *BotStatusEnum `json:"botStatus,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    DataPrivacy *DataPrivacy `json:"dataPrivacy,omitempty"`
    Description *string `json:"description,omitempty"`
    FailureReasons []string `json:"failureReasons,omitempty"`
    IdleSessionTTLInSeconds *int64 `json:"idleSessionTTLInSeconds,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

