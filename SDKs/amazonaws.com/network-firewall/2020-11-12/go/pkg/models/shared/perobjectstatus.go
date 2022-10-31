package shared



type PerObjectStatus struct {
    SyncStatus *PerObjectSyncStatusEnum `json:"SyncStatus,omitempty"`
    UpdateToken *string `json:"UpdateToken,omitempty"`
    
}

