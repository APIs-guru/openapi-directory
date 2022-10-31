package shared



type BillingDetails struct {
    BilledDurationInMilliseconds *int64 `json:"billedDurationInMilliseconds,omitempty"`
    BilledMemoryUsedInMb *int64 `json:"billedMemoryUsedInMB,omitempty"`
    
}

