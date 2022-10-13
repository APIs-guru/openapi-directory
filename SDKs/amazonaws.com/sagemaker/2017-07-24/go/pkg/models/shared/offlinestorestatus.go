package shared

type OfflineStoreStatus struct {
	BlockedReason *string                     `json:"BlockedReason"`
	Status        OfflineStoreStatusValueEnum `json:"Status"`
}
