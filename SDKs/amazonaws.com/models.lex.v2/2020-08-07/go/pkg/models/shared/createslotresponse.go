package shared

import (
	"time"
)

type CreateSlotResponse struct {
	BotID                   *string                      `json:"botId"`
	BotVersion              *string                      `json:"botVersion"`
	CreationDateTime        *time.Time                   `json:"creationDateTime"`
	Description             *string                      `json:"description"`
	IntentID                *string                      `json:"intentId"`
	LocaleID                *string                      `json:"localeId"`
	MultipleValuesSetting   *MultipleValuesSetting       `json:"multipleValuesSetting"`
	ObfuscationSetting      *ObfuscationSetting          `json:"obfuscationSetting"`
	SlotID                  *string                      `json:"slotId"`
	SlotName                *string                      `json:"slotName"`
	SlotTypeID              *string                      `json:"slotTypeId"`
	ValueElicitationSetting *SlotValueElicitationSetting `json:"valueElicitationSetting"`
}
