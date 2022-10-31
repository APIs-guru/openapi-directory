package shared

import (
"time")

type UpdateBotLocaleResponse struct {
    BotID *string `json:"botId,omitempty"`
    BotLocaleStatus *BotLocaleStatusEnum `json:"botLocaleStatus,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    Description *string `json:"description,omitempty"`
    FailureReasons []string `json:"failureReasons,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    LocaleID *string `json:"localeId,omitempty"`
    LocaleName *string `json:"localeName,omitempty"`
    NluIntentConfidenceThreshold *float64 `json:"nluIntentConfidenceThreshold,omitempty"`
    VoiceSettings *VoiceSettings `json:"voiceSettings,omitempty"`
    
}

