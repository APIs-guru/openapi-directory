package shared

// PauseFinalizedDealRequest
// Request message for pausing a finalized deal.
type PauseFinalizedDealRequest struct {
	Reason *string `json:"reason,omitempty"`
}
