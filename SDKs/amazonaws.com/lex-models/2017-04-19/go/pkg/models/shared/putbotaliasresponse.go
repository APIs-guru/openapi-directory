package shared

import (
"time")

type PutBotAliasResponse struct {
    BotName *string `json:"botName,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    Checksum *string `json:"checksum,omitempty"`
    ConversationLogs *ConversationLogsResponse `json:"conversationLogs,omitempty"`
    CreatedDate *time.Time `json:"createdDate,omitempty"`
    Description *string `json:"description,omitempty"`
    LastUpdatedDate *time.Time `json:"lastUpdatedDate,omitempty"`
    Name *string `json:"name,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

