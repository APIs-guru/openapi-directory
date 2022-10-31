package shared

import (
"time")

type ResourceDataSyncItem struct {
    LastStatus *LastResourceDataSyncStatusEnum `json:"LastStatus,omitempty"`
    LastSuccessfulSyncTime *time.Time `json:"LastSuccessfulSyncTime,omitempty"`
    LastSyncStatusMessage *string `json:"LastSyncStatusMessage,omitempty"`
    LastSyncTime *time.Time `json:"LastSyncTime,omitempty"`
    S3Destination *ResourceDataSyncS3Destination `json:"S3Destination,omitempty"`
    SyncCreatedTime *time.Time `json:"SyncCreatedTime,omitempty"`
    SyncLastModifiedTime *time.Time `json:"SyncLastModifiedTime,omitempty"`
    SyncName *string `json:"SyncName,omitempty"`
    SyncSource *ResourceDataSyncSourceWithState `json:"SyncSource,omitempty"`
    SyncType *string `json:"SyncType,omitempty"`
    
}

