package shared

import (
	"time"
)

type SlotSummary struct {
	Description                         *string              `json:"description"`
	LastUpdatedDateTime                 *time.Time           `json:"lastUpdatedDateTime"`
	SlotConstraint                      *SlotConstraintEnum  `json:"slotConstraint"`
	SlotID                              *string              `json:"slotId"`
	SlotName                            *string              `json:"slotName"`
	SlotTypeID                          *string              `json:"slotTypeId"`
	ValueElicitationPromptSpecification *PromptSpecification `json:"valueElicitationPromptSpecification"`
}
