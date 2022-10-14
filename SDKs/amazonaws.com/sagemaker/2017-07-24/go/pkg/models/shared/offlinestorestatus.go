package shared

type OfflineStoreStatus struct {
	BlockedReason *string                     `json:"BlockedReason,omitempty"`
	Status        OfflineStoreStatusValueEnum `json:"Status"`
}
