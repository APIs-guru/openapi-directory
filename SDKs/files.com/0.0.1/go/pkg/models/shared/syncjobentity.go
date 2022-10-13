package shared

import (
	"time"
)

type SyncJobEntity struct {
	FolderBehaviorID     *int32     `json:"folder_behavior_id"`
	QueuedAt             *time.Time `json:"queued_at"`
	RegionalWorkerStatus *string    `json:"regional_worker_status"`
	Status               *string    `json:"status"`
	UpdatedAt            *time.Time `json:"updated_at"`
	UUID                 *string    `json:"uuid"`
}
