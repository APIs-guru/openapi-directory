package shared

import (
"time")

type SyncJobEntity struct {
    FolderBehaviorID *int32 `json:"folder_behavior_id,omitempty"`
    QueuedAt *time.Time `json:"queued_at,omitempty"`
    RegionalWorkerStatus *string `json:"regional_worker_status,omitempty"`
    Status *string `json:"status,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    
}

