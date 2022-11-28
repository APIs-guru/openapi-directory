package shared

import (
	"time"
)

// UsageDailySnapshotEntity
// List Usage Daily Snapshots
type UsageDailySnapshotEntity struct {
	CurrentStorage     *int32        `json:"current_storage,omitempty"`
	Date               *time.Time    `json:"date,omitempty"`
	ID                 *int32        `json:"id,omitempty"`
	UsageByTopLevelDir []interface{} `json:"usage_by_top_level_dir,omitempty"`
}
