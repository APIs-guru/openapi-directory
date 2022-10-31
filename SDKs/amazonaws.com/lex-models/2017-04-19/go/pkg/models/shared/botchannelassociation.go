package shared

import (
"time")

type BotChannelAssociation struct {
    BotAlias *string `json:"botAlias,omitempty"`
    BotConfiguration map[string]string `json:"botConfiguration,omitempty"`
    BotName *string `json:"botName,omitempty"`
    CreatedDate *time.Time `json:"createdDate,omitempty"`
    Description *string `json:"description,omitempty"`
    FailureReason *string `json:"failureReason,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *ChannelStatusEnum `json:"status,omitempty"`
    Type *ChannelTypeEnum `json:"type,omitempty"`
    
}

