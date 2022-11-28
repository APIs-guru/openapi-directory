package shared

import (
	"time"
)

// UsageRecord
// <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p>
type UsageRecord struct {
	CustomerIdentifier string            `json:"CustomerIdentifier"`
	Dimension          string            `json:"Dimension"`
	Quantity           *int64            `json:"Quantity,omitempty"`
	Timestamp          time.Time         `json:"Timestamp"`
	UsageAllocations   []UsageAllocation `json:"UsageAllocations,omitempty"`
}
