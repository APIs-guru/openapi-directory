package shared

type QuotaStatus struct {
	Consumed  *int32 `json:"consumed"`
	Remaining *int32 `json:"remaining"`
}
