package shared

import (
	"time"
)

type BuildBotLocaleResponse struct {
	BotID                      *string              `json:"botId"`
	BotLocaleStatus            *BotLocaleStatusEnum `json:"botLocaleStatus"`
	BotVersion                 *string              `json:"botVersion"`
	LastBuildSubmittedDateTime *time.Time           `json:"lastBuildSubmittedDateTime"`
	LocaleID                   *string              `json:"localeId"`
}
