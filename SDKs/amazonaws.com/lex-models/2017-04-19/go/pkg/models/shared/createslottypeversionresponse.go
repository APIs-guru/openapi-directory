package shared

import (
	"time"
)

type CreateSlotTypeVersionResponse struct {
	Checksum                *string                         `json:"checksum"`
	CreatedDate             *time.Time                      `json:"createdDate"`
	Description             *string                         `json:"description"`
	EnumerationValues       []EnumerationValue              `json:"enumerationValues"`
	LastUpdatedDate         *time.Time                      `json:"lastUpdatedDate"`
	Name                    *string                         `json:"name"`
	ParentSlotTypeSignature *string                         `json:"parentSlotTypeSignature"`
	SlotTypeConfigurations  []SlotTypeConfiguration         `json:"slotTypeConfigurations"`
	ValueSelectionStrategy  *SlotValueSelectionStrategyEnum `json:"valueSelectionStrategy"`
	Version                 *string                         `json:"version"`
}
