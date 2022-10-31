package shared

import (
"time")

type StudioComponentSummary struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    CreatedBy *string `json:"createdBy,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    StudioComponentID *string `json:"studioComponentId,omitempty"`
    Subtype *StudioComponentSubtypeEnum `json:"subtype,omitempty"`
    Type *StudioComponentTypeEnum `json:"type,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    UpdatedBy *string `json:"updatedBy,omitempty"`
    
}

