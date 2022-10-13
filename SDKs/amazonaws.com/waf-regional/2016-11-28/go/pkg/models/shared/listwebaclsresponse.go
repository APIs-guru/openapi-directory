package shared

type ListWebAcLsResponse struct {
	NextMarker *string         `json:"NextMarker"`
	WebAcLs    []WebACLSummary `json:"WebACLs"`
}
