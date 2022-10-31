package shared

import (
"time")

type BotLocaleSummary struct {
    BotLocaleStatus *BotLocaleStatusEnum `json:"botLocaleStatus,omitempty"`
    Description *string `json:"description,omitempty"`
    LastBuildSubmittedDateTime *time.Time `json:"lastBuildSubmittedDateTime,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    LocaleID *string `json:"localeId,omitempty"`
    LocaleName *string `json:"localeName,omitempty"`
    
}

