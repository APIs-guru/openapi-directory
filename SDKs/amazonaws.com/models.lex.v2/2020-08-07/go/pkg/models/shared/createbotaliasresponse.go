package shared

import (
	"time"
)

type CreateBotAliasResponse struct {
	BotAliasID                *string                           `json:"botAliasId"`
	BotAliasLocaleSettings    map[string]BotAliasLocaleSettings `json:"botAliasLocaleSettings"`
	BotAliasName              *string                           `json:"botAliasName"`
	BotAliasStatus            *BotAliasStatusEnum               `json:"botAliasStatus"`
	BotID                     *string                           `json:"botId"`
	BotVersion                *string                           `json:"botVersion"`
	ConversationLogSettings   *ConversationLogSettings          `json:"conversationLogSettings"`
	CreationDateTime          *time.Time                        `json:"creationDateTime"`
	Description               *string                           `json:"description"`
	SentimentAnalysisSettings *SentimentAnalysisSettings        `json:"sentimentAnalysisSettings"`
	Tags                      map[string]string                 `json:"tags"`
}
