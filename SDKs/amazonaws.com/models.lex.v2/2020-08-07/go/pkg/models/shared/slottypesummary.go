package shared

import (
"time")

type SlotTypeSummary struct {
    Description *string `json:"description,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    ParentSlotTypeSignature *string `json:"parentSlotTypeSignature,omitempty"`
    SlotTypeID *string `json:"slotTypeId,omitempty"`
    SlotTypeName *string `json:"slotTypeName,omitempty"`
    
}

