package shared

import (
"time")

type BotMetadata struct {
    CreatedDate *time.Time `json:"createdDate,omitempty"`
    Description *string `json:"description,omitempty"`
    LastUpdatedDate *time.Time `json:"lastUpdatedDate,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *StatusEnum `json:"status,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

