package shared

import (
"time")

type SlotSummary struct {
    Description *string `json:"description,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    SlotConstraint *SlotConstraintEnum `json:"slotConstraint,omitempty"`
    SlotID *string `json:"slotId,omitempty"`
    SlotName *string `json:"slotName,omitempty"`
    SlotTypeID *string `json:"slotTypeId,omitempty"`
    ValueElicitationPromptSpecification *PromptSpecification `json:"valueElicitationPromptSpecification,omitempty"`
    
}

