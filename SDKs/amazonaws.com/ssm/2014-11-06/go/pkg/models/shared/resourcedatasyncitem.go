package shared

import (
	"time"
)

type ResourceDataSyncItem struct {
	LastStatus             *LastResourceDataSyncStatusEnum  `json:"LastStatus"`
	LastSuccessfulSyncTime *time.Time                       `json:"LastSuccessfulSyncTime"`
	LastSyncStatusMessage  *string                          `json:"LastSyncStatusMessage"`
	LastSyncTime           *time.Time                       `json:"LastSyncTime"`
	S3Destination          *ResourceDataSyncS3Destination   `json:"S3Destination"`
	SyncCreatedTime        *time.Time                       `json:"SyncCreatedTime"`
	SyncLastModifiedTime   *time.Time                       `json:"SyncLastModifiedTime"`
	SyncName               *string                          `json:"SyncName"`
	SyncSource             *ResourceDataSyncSourceWithState `json:"SyncSource"`
	SyncType               *string                          `json:"SyncType"`
}
