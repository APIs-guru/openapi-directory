package shared

type ListSQLInjectionMatchSetsResponse struct {
	NextMarker            *string                       `json:"NextMarker"`
	SQLInjectionMatchSets []SQLInjectionMatchSetSummary `json:"SqlInjectionMatchSets"`
}
