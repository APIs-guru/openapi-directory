package shared

// ListXSSMatchSetsRequest
// A request to list the <a>XssMatchSet</a> objects created by the current AWS account.
type ListXSSMatchSetsRequest struct {
	Limit      *int64  `json:"Limit,omitempty"`
	NextMarker *string `json:"NextMarker,omitempty"`
}
