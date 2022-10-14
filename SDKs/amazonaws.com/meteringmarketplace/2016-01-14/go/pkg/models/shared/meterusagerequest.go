package shared

import (
	"time"
)

type MeterUsageRequest struct {
	DryRun           *bool             `json:"DryRun,omitempty"`
	ProductCode      string            `json:"ProductCode"`
	Timestamp        time.Time         `json:"Timestamp"`
	UsageAllocations []UsageAllocation `json:"UsageAllocations,omitempty"`
	UsageDimension   string            `json:"UsageDimension"`
	UsageQuantity    *int64            `json:"UsageQuantity,omitempty"`
}
