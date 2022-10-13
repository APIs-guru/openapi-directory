package shared

type ListCapacityCommitmentsResponse struct {
	CapacityCommitments []CapacityCommitment `json:"capacityCommitments"`
	NextPageToken       *string              `json:"nextPageToken"`
}
