package shared

// MergeCapacityCommitmentsRequest
// The request for ReservationService.MergeCapacityCommitments.
type MergeCapacityCommitmentsRequest struct {
	CapacityCommitmentIds []string `json:"capacityCommitmentIds,omitempty"`
}
