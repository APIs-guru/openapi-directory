package shared

// BatchUpdateDealsRequestInput
// Request message for batch updating deals.
type BatchUpdateDealsRequestInput struct {
	Requests []UpdateDealRequestInput `json:"requests,omitempty"`
}
