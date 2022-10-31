package shared

import (
"time")

type SlotTypeMetadata struct {
    CreatedDate *time.Time `json:"createdDate,omitempty"`
    Description *string `json:"description,omitempty"`
    LastUpdatedDate *time.Time `json:"lastUpdatedDate,omitempty"`
    Name *string `json:"name,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

