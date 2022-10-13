package shared

type CreateResourceDataSyncRequest struct {
	S3Destination *ResourceDataSyncS3Destination `json:"S3Destination"`
	SyncName      string                         `json:"SyncName"`
	SyncSource    *ResourceDataSyncSource        `json:"SyncSource"`
	SyncType      *string                        `json:"SyncType"`
}
