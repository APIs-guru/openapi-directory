package shared

import (
	"time"
)

type ChangedAssetDetail struct {
	AssetChangedUtcDatetime *time.Time `json:"asset_changed_utc_datetime"`
	AssetLifecycle          *string    `json:"asset_lifecycle"`
	AssetType               *string    `json:"asset_type"`
	ID                      *string    `json:"id"`
	URI                     *string    `json:"uri"`
}
