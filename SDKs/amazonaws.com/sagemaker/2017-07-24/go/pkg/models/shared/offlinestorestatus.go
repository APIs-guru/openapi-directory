package shared

// OfflineStoreStatus
// The status of <code>OfflineStore</code>.
type OfflineStoreStatus struct {
	BlockedReason *string                     `json:"BlockedReason,omitempty"`
	Status        OfflineStoreStatusValueEnum `json:"Status"`
}
