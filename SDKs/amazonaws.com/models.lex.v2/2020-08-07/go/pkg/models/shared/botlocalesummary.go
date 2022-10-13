package shared

import (
	"time"
)

type BotLocaleSummary struct {
	BotLocaleStatus            *BotLocaleStatusEnum `json:"botLocaleStatus"`
	Description                *string              `json:"description"`
	LastBuildSubmittedDateTime *time.Time           `json:"lastBuildSubmittedDateTime"`
	LastUpdatedDateTime        *time.Time           `json:"lastUpdatedDateTime"`
	LocaleID                   *string              `json:"localeId"`
	LocaleName                 *string              `json:"localeName"`
}
