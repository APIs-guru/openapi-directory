package shared

import (
	"time"
)

type BuildBotLocaleResponse struct {
	BotID                      *string              `json:"botId,omitempty"`
	BotLocaleStatus            *BotLocaleStatusEnum `json:"botLocaleStatus,omitempty"`
	BotVersion                 *string              `json:"botVersion,omitempty"`
	LastBuildSubmittedDateTime *time.Time           `json:"lastBuildSubmittedDateTime,omitempty"`
	LocaleID                   *string              `json:"localeId,omitempty"`
}
