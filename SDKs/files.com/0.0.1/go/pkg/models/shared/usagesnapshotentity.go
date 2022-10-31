package shared

import (
"time")

type UsageSnapshotEntity struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CurrentStorage *float64 `json:"current_storage,omitempty"`
    DeletedFilesCountedInMinimum *float64 `json:"deleted_files_counted_in_minimum,omitempty"`
    DeletedFilesStorage *float64 `json:"deleted_files_storage,omitempty"`
    EndAt *time.Time `json:"end_at,omitempty"`
    HighWaterStorage *float64 `json:"high_water_storage,omitempty"`
    HighWaterUserCount *float64 `json:"high_water_user_count,omitempty"`
    ID *int32 `json:"id,omitempty"`
    RootStorage *float64 `json:"root_storage,omitempty"`
    StartAt *time.Time `json:"start_at,omitempty"`
    TotalDownloads *int32 `json:"total_downloads,omitempty"`
    TotalUploads *int32 `json:"total_uploads,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UsageByTopLevelDir map[string]interface{} `json:"usage_by_top_level_dir,omitempty"`
    
}

