package shared

// SplitCapacityCommitmentResponse
// The response for ReservationService.SplitCapacityCommitment.
type SplitCapacityCommitmentResponse struct {
	First  *CapacityCommitment `json:"first,omitempty"`
	Second *CapacityCommitment `json:"second,omitempty"`
}
