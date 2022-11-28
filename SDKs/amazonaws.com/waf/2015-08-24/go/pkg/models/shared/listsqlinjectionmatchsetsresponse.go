package shared

// ListSQLInjectionMatchSetsResponse
// The response to a <a>ListSqlInjectionMatchSets</a> request.
type ListSQLInjectionMatchSetsResponse struct {
	NextMarker            *string                       `json:"NextMarker,omitempty"`
	SQLInjectionMatchSets []SQLInjectionMatchSetSummary `json:"SqlInjectionMatchSets,omitempty"`
}
