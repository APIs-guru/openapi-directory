package shared

// ListSQLInjectionMatchSetsRequest
// A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account.
type ListSQLInjectionMatchSetsRequest struct {
	Limit      *int64  `json:"Limit,omitempty"`
	NextMarker *string `json:"NextMarker,omitempty"`
}
