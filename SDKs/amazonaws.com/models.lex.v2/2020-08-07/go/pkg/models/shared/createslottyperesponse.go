package shared

import (
	"time"
)

type CreateSlotTypeResponse struct {
	BotID                   *string                    `json:"botId,omitempty"`
	BotVersion              *string                    `json:"botVersion,omitempty"`
	CreationDateTime        *time.Time                 `json:"creationDateTime,omitempty"`
	Description             *string                    `json:"description,omitempty"`
	LocaleID                *string                    `json:"localeId,omitempty"`
	ParentSlotTypeSignature *string                    `json:"parentSlotTypeSignature,omitempty"`
	SlotTypeID              *string                    `json:"slotTypeId,omitempty"`
	SlotTypeName            *string                    `json:"slotTypeName,omitempty"`
	SlotTypeValues          []SlotTypeValue            `json:"slotTypeValues,omitempty"`
	ValueSelectionSetting   *SlotValueSelectionSetting `json:"valueSelectionSetting,omitempty"`
}
