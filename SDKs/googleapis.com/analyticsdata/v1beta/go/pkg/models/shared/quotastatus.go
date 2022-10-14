package shared

type QuotaStatus struct {
	Consumed  *int32 `json:"consumed,omitempty"`
	Remaining *int32 `json:"remaining,omitempty"`
}
