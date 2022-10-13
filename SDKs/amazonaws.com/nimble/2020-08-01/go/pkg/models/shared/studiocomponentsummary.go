package shared

import (
	"time"
)

type StudioComponentSummary struct {
	CreatedAt         *time.Time                  `json:"createdAt"`
	CreatedBy         *string                     `json:"createdBy"`
	Description       *string                     `json:"description"`
	Name              *string                     `json:"name"`
	StudioComponentID *string                     `json:"studioComponentId"`
	Subtype           *StudioComponentSubtypeEnum `json:"subtype"`
	Type              *StudioComponentTypeEnum    `json:"type"`
	UpdatedAt         *time.Time                  `json:"updatedAt"`
	UpdatedBy         *string                     `json:"updatedBy"`
}
