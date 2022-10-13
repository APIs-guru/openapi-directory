package shared

type BillingDetails struct {
	BilledDurationInMilliseconds *int64 `json:"billedDurationInMilliseconds"`
	BilledMemoryUsedInMb         *int64 `json:"billedMemoryUsedInMB"`
}
