package shared

type PerObjectStatus struct {
	SyncStatus  *PerObjectSyncStatusEnum `json:"SyncStatus"`
	UpdateToken *string                  `json:"UpdateToken"`
}
