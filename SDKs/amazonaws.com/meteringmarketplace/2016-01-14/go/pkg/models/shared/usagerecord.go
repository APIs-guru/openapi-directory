package shared

import (
"time")

type UsageRecord struct {
    CustomerIdentifier string `json:"CustomerIdentifier"`
    Dimension string `json:"Dimension"`
    Quantity *int64 `json:"Quantity,omitempty"`
    Timestamp time.Time `json:"Timestamp"`
    UsageAllocations []UsageAllocation `json:"UsageAllocations,omitempty"`
    
}

