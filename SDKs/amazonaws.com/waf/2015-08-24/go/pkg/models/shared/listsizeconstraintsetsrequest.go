package shared

type ListSizeConstraintSetsRequest struct {
	Limit      *int64  `json:"Limit"`
	NextMarker *string `json:"NextMarker"`
}
