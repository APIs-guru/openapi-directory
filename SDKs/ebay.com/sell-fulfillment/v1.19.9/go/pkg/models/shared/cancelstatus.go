package shared

// CancelStatus
// This type contains information about any requests that have been made to cancel an order.
type CancelStatus struct {
	CancelRequests []CancelRequest `json:"cancelRequests,omitempty"`
	CancelState    *string         `json:"cancelState,omitempty"`
	CancelledDate  *string         `json:"cancelledDate,omitempty"`
}
