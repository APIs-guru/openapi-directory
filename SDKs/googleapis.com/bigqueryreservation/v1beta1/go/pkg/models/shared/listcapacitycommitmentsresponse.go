package shared



type ListCapacityCommitmentsResponse struct {
    CapacityCommitments []CapacityCommitment `json:"capacityCommitments,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

