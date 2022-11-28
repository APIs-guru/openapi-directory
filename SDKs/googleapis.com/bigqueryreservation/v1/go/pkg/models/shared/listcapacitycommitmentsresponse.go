package shared

// ListCapacityCommitmentsResponse
// The response for ReservationService.ListCapacityCommitments.
type ListCapacityCommitmentsResponse struct {
	CapacityCommitments []CapacityCommitment `json:"capacityCommitments,omitempty"`
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
}
