package shared

type DeleteResourceDataSyncRequest struct {
	SyncName string  `json:"SyncName"`
	SyncType *string `json:"SyncType,omitempty"`
}
