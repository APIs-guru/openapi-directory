package shared

import (
	"time"
)

type CreateBotLocaleResponse struct {
	BotID                        *string              `json:"botId"`
	BotLocaleStatus              *BotLocaleStatusEnum `json:"botLocaleStatus"`
	BotVersion                   *string              `json:"botVersion"`
	CreationDateTime             *time.Time           `json:"creationDateTime"`
	Description                  *string              `json:"description"`
	LocaleID                     *string              `json:"localeId"`
	LocaleName                   *string              `json:"localeName"`
	NluIntentConfidenceThreshold *float64             `json:"nluIntentConfidenceThreshold"`
	VoiceSettings                *VoiceSettings       `json:"voiceSettings"`
}
