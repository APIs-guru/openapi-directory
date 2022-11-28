package shared

// SimpleSegment
// A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.
type SimpleSegment struct {
	OrFiltersForSegment []OrFiltersForSegment `json:"orFiltersForSegment,omitempty"`
}
