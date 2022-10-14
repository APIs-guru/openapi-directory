package shared

type ListXSSMatchSetsRequest struct {
	Limit      *int64  `json:"Limit,omitempty"`
	NextMarker *string `json:"NextMarker,omitempty"`
}
