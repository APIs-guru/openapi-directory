package shared

// OrFiltersForSegment
// A list of segment filters in the `OR` group are combined with the logical OR operator.
type OrFiltersForSegment struct {
	SegmentFilterClauses []SegmentFilterClause `json:"segmentFilterClauses,omitempty"`
}
