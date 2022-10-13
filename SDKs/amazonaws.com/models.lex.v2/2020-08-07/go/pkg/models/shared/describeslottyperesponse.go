package shared

import (
	"time"
)

type DescribeSlotTypeResponse struct {
	BotID                   *string                    `json:"botId"`
	BotVersion              *string                    `json:"botVersion"`
	CreationDateTime        *time.Time                 `json:"creationDateTime"`
	Description             *string                    `json:"description"`
	LastUpdatedDateTime     *time.Time                 `json:"lastUpdatedDateTime"`
	LocaleID                *string                    `json:"localeId"`
	ParentSlotTypeSignature *string                    `json:"parentSlotTypeSignature"`
	SlotTypeID              *string                    `json:"slotTypeId"`
	SlotTypeName            *string                    `json:"slotTypeName"`
	SlotTypeValues          []SlotTypeValue            `json:"slotTypeValues"`
	ValueSelectionSetting   *SlotValueSelectionSetting `json:"valueSelectionSetting"`
}
