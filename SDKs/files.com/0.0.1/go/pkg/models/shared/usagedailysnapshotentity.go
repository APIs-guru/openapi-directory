package shared

import (
	"time"
)

type UsageDailySnapshotEntity struct {
	CurrentStorage     *int32        `json:"current_storage"`
	Date               *time.Time    `json:"date"`
	ID                 *int32        `json:"id"`
	UsageByTopLevelDir []interface{} `json:"usage_by_top_level_dir"`
}
