package shared

import (
	"time"
)

type UpdateBotLocaleResponse struct {
	BotID                        *string              `json:"botId"`
	BotLocaleStatus              *BotLocaleStatusEnum `json:"botLocaleStatus"`
	BotVersion                   *string              `json:"botVersion"`
	CreationDateTime             *time.Time           `json:"creationDateTime"`
	Description                  *string              `json:"description"`
	FailureReasons               []string             `json:"failureReasons"`
	LastUpdatedDateTime          *time.Time           `json:"lastUpdatedDateTime"`
	LocaleID                     *string              `json:"localeId"`
	LocaleName                   *string              `json:"localeName"`
	NluIntentConfidenceThreshold *float64             `json:"nluIntentConfidenceThreshold"`
	VoiceSettings                *VoiceSettings       `json:"voiceSettings"`
}
