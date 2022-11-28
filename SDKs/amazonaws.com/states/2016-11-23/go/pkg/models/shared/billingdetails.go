package shared

// BillingDetails
// An object that describes workflow billing details.
type BillingDetails struct {
	BilledDurationInMilliseconds *int64 `json:"billedDurationInMilliseconds,omitempty"`
	BilledMemoryUsedInMb         *int64 `json:"billedMemoryUsedInMB,omitempty"`
}
