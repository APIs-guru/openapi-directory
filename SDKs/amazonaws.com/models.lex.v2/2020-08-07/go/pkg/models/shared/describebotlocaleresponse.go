package shared

import (
	"time"
)

type DescribeBotLocaleResponse struct {
	BotID                        *string                 `json:"botId,omitempty"`
	BotLocaleHistoryEvents       []BotLocaleHistoryEvent `json:"botLocaleHistoryEvents,omitempty"`
	BotLocaleStatus              *BotLocaleStatusEnum    `json:"botLocaleStatus,omitempty"`
	BotVersion                   *string                 `json:"botVersion,omitempty"`
	CreationDateTime             *time.Time              `json:"creationDateTime,omitempty"`
	Description                  *string                 `json:"description,omitempty"`
	FailureReasons               []string                `json:"failureReasons,omitempty"`
	IntentsCount                 *int64                  `json:"intentsCount,omitempty"`
	LastBuildSubmittedDateTime   *time.Time              `json:"lastBuildSubmittedDateTime,omitempty"`
	LastUpdatedDateTime          *time.Time              `json:"lastUpdatedDateTime,omitempty"`
	LocaleID                     *string                 `json:"localeId,omitempty"`
	LocaleName                   *string                 `json:"localeName,omitempty"`
	NluIntentConfidenceThreshold *float64                `json:"nluIntentConfidenceThreshold,omitempty"`
	SlotTypesCount               *int64                  `json:"slotTypesCount,omitempty"`
	VoiceSettings                *VoiceSettings          `json:"voiceSettings,omitempty"`
}
