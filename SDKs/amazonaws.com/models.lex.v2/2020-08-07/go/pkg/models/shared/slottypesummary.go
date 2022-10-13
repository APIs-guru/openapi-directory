package shared

import (
	"time"
)

type SlotTypeSummary struct {
	Description             *string    `json:"description"`
	LastUpdatedDateTime     *time.Time `json:"lastUpdatedDateTime"`
	ParentSlotTypeSignature *string    `json:"parentSlotTypeSignature"`
	SlotTypeID              *string    `json:"slotTypeId"`
	SlotTypeName            *string    `json:"slotTypeName"`
}
