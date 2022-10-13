package shared

import (
	"time"
)

type AssetUsage struct {
	AssetID   *string    `json:"asset_id"`
	Quantity  *int32     `json:"quantity"`
	UsageDate *time.Time `json:"usage_date"`
}
