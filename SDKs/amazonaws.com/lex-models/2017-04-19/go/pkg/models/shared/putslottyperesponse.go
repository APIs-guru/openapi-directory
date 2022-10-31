package shared

import (
	"time"
)

type PutSlotTypeResponse struct {
	Checksum                *string                         `json:"checksum,omitempty"`
	CreateVersion           *bool                           `json:"createVersion,omitempty"`
	CreatedDate             *time.Time                      `json:"createdDate,omitempty"`
	Description             *string                         `json:"description,omitempty"`
	EnumerationValues       []EnumerationValue              `json:"enumerationValues,omitempty"`
	LastUpdatedDate         *time.Time                      `json:"lastUpdatedDate,omitempty"`
	Name                    *string                         `json:"name,omitempty"`
	ParentSlotTypeSignature *string                         `json:"parentSlotTypeSignature,omitempty"`
	SlotTypeConfigurations  []SlotTypeConfiguration         `json:"slotTypeConfigurations,omitempty"`
	ValueSelectionStrategy  *SlotValueSelectionStrategyEnum `json:"valueSelectionStrategy,omitempty"`
	Version                 *string                         `json:"version,omitempty"`
}
