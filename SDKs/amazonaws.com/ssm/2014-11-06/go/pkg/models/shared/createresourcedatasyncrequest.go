package shared

type CreateResourceDataSyncRequest struct {
	S3Destination *ResourceDataSyncS3Destination `json:"S3Destination,omitempty"`
	SyncName      string                         `json:"SyncName"`
	SyncSource    *ResourceDataSyncSource        `json:"SyncSource,omitempty"`
	SyncType      *string                        `json:"SyncType,omitempty"`
}
