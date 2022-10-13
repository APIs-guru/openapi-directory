package shared

type ListWebAcLsRequest struct {
	Limit      *int64  `json:"Limit"`
	NextMarker *string `json:"NextMarker"`
}
