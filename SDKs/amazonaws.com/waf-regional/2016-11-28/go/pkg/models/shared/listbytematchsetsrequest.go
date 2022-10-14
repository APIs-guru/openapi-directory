package shared

type ListByteMatchSetsRequest struct {
	Limit      *int64  `json:"Limit,omitempty"`
	NextMarker *string `json:"NextMarker,omitempty"`
}
