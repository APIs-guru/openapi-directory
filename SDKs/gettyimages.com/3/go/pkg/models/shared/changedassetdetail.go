package shared

import (
	"time"
)

type ChangedAssetDetail struct {
	AssetChangedUtcDatetime *time.Time `json:"asset_changed_utc_datetime,omitempty"`
	AssetLifecycle          *string    `json:"asset_lifecycle,omitempty"`
	AssetType               *string    `json:"asset_type,omitempty"`
	ID                      *string    `json:"id,omitempty"`
	URI                     *string    `json:"uri,omitempty"`
}
