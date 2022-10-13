package shared

type ListGeoMatchSetsRequest struct {
	Limit      *int64  `json:"Limit"`
	NextMarker *string `json:"NextMarker"`
}
