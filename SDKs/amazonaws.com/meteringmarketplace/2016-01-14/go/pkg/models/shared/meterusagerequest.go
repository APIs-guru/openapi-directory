package shared

import (
	"time"
)

type MeterUsageRequest struct {
	DryRun           *bool             `json:"DryRun"`
	ProductCode      string            `json:"ProductCode"`
	Timestamp        time.Time         `json:"Timestamp"`
	UsageAllocations []UsageAllocation `json:"UsageAllocations"`
	UsageDimension   string            `json:"UsageDimension"`
	UsageQuantity    *int64            `json:"UsageQuantity"`
}
