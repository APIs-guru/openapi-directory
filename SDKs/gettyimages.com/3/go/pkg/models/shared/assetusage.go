package shared

import (
	"time"
)

// AssetUsage
// Specifies the id, usage Quantity, and date of when an asset was used.
type AssetUsage struct {
	AssetID   *string    `json:"asset_id,omitempty"`
	Quantity  *int32     `json:"quantity,omitempty"`
	UsageDate *time.Time `json:"usage_date,omitempty"`
}
