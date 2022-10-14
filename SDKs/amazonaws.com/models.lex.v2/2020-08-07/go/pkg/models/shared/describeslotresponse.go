package shared

import (
	"time"
)

type DescribeSlotResponse struct {
	BotID                   *string                      `json:"botId,omitempty"`
	BotVersion              *string                      `json:"botVersion,omitempty"`
	CreationDateTime        *time.Time                   `json:"creationDateTime,omitempty"`
	Description             *string                      `json:"description,omitempty"`
	IntentID                *string                      `json:"intentId,omitempty"`
	LastUpdatedDateTime     *time.Time                   `json:"lastUpdatedDateTime,omitempty"`
	LocaleID                *string                      `json:"localeId,omitempty"`
	MultipleValuesSetting   *MultipleValuesSetting       `json:"multipleValuesSetting,omitempty"`
	ObfuscationSetting      *ObfuscationSetting          `json:"obfuscationSetting,omitempty"`
	SlotID                  *string                      `json:"slotId,omitempty"`
	SlotName                *string                      `json:"slotName,omitempty"`
	SlotTypeID              *string                      `json:"slotTypeId,omitempty"`
	ValueElicitationSetting *SlotValueElicitationSetting `json:"valueElicitationSetting,omitempty"`
}
