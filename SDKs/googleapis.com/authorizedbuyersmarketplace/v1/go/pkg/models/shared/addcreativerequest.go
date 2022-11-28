package shared

// AddCreativeRequest
// Request message for adding creative to be used in the bidding process for the finalized deal.
type AddCreativeRequest struct {
	Creative *string `json:"creative,omitempty"`
}
