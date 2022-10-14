package shared

import (
	"time"
)

type AssetUsage struct {
	AssetID   *string    `json:"asset_id,omitempty"`
	Quantity  *int32     `json:"quantity,omitempty"`
	UsageDate *time.Time `json:"usage_date,omitempty"`
}
