package shared



type UpdateResourceDataSyncRequest struct {
    SyncName string `json:"SyncName"`
    SyncSource ResourceDataSyncSource `json:"SyncSource"`
    SyncType string `json:"SyncType"`
    
}

