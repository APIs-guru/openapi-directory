package shared

import (
	"time"
)

type DescribeBotLocaleResponse struct {
	BotID                        *string                 `json:"botId"`
	BotLocaleHistoryEvents       []BotLocaleHistoryEvent `json:"botLocaleHistoryEvents"`
	BotLocaleStatus              *BotLocaleStatusEnum    `json:"botLocaleStatus"`
	BotVersion                   *string                 `json:"botVersion"`
	CreationDateTime             *time.Time              `json:"creationDateTime"`
	Description                  *string                 `json:"description"`
	FailureReasons               []string                `json:"failureReasons"`
	IntentsCount                 *int64                  `json:"intentsCount"`
	LastBuildSubmittedDateTime   *time.Time              `json:"lastBuildSubmittedDateTime"`
	LastUpdatedDateTime          *time.Time              `json:"lastUpdatedDateTime"`
	LocaleID                     *string                 `json:"localeId"`
	LocaleName                   *string                 `json:"localeName"`
	NluIntentConfidenceThreshold *float64                `json:"nluIntentConfidenceThreshold"`
	SlotTypesCount               *int64                  `json:"slotTypesCount"`
	VoiceSettings                *VoiceSettings          `json:"voiceSettings"`
}
