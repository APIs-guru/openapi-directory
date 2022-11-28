package shared

// QuotaStatus
// Current state for a particular quota group.
type QuotaStatus struct {
	Consumed  *int32 `json:"consumed,omitempty"`
	Remaining *int32 `json:"remaining,omitempty"`
}
