package shared

import (
	"time"
)

type DescribeBotAliasResponse struct {
	BotAliasHistoryEvents     []BotAliasHistoryEvent            `json:"botAliasHistoryEvents"`
	BotAliasID                *string                           `json:"botAliasId"`
	BotAliasLocaleSettings    map[string]BotAliasLocaleSettings `json:"botAliasLocaleSettings"`
	BotAliasName              *string                           `json:"botAliasName"`
	BotAliasStatus            *BotAliasStatusEnum               `json:"botAliasStatus"`
	BotID                     *string                           `json:"botId"`
	BotVersion                *string                           `json:"botVersion"`
	ConversationLogSettings   *ConversationLogSettings          `json:"conversationLogSettings"`
	CreationDateTime          *time.Time                        `json:"creationDateTime"`
	Description               *string                           `json:"description"`
	LastUpdatedDateTime       *time.Time                        `json:"lastUpdatedDateTime"`
	SentimentAnalysisSettings *SentimentAnalysisSettings        `json:"sentimentAnalysisSettings"`
}
