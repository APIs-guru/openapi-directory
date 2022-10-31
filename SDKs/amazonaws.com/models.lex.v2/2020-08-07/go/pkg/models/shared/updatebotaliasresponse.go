package shared

import (
"time")

type UpdateBotAliasResponse struct {
    BotAliasID *string `json:"botAliasId,omitempty"`
    BotAliasLocaleSettings map[string]BotAliasLocaleSettings `json:"botAliasLocaleSettings,omitempty"`
    BotAliasName *string `json:"botAliasName,omitempty"`
    BotAliasStatus *BotAliasStatusEnum `json:"botAliasStatus,omitempty"`
    BotID *string `json:"botId,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    ConversationLogSettings *ConversationLogSettings `json:"conversationLogSettings,omitempty"`
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    Description *string `json:"description,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    SentimentAnalysisSettings *SentimentAnalysisSettings `json:"sentimentAnalysisSettings,omitempty"`
    
}

