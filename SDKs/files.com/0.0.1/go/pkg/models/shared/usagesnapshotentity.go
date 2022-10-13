package shared

import (
	"time"
)

type UsageSnapshotEntity struct {
	CreatedAt                    *time.Time             `json:"created_at"`
	CurrentStorage               *float64               `json:"current_storage"`
	DeletedFilesCountedInMinimum *float64               `json:"deleted_files_counted_in_minimum"`
	DeletedFilesStorage          *float64               `json:"deleted_files_storage"`
	EndAt                        *time.Time             `json:"end_at"`
	HighWaterStorage             *float64               `json:"high_water_storage"`
	HighWaterUserCount           *float64               `json:"high_water_user_count"`
	ID                           *int32                 `json:"id"`
	RootStorage                  *float64               `json:"root_storage"`
	StartAt                      *time.Time             `json:"start_at"`
	TotalDownloads               *int32                 `json:"total_downloads"`
	TotalUploads                 *int32                 `json:"total_uploads"`
	UpdatedAt                    *time.Time             `json:"updated_at"`
	UsageByTopLevelDir           map[string]interface{} `json:"usage_by_top_level_dir"`
}
