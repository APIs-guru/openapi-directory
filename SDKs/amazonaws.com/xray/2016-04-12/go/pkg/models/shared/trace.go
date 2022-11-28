package shared

// Trace
// A collection of segment documents with matching trace IDs.
type Trace struct {
	Duration      *float64  `json:"Duration,omitempty"`
	ID            *string   `json:"Id,omitempty"`
	LimitExceeded *bool     `json:"LimitExceeded,omitempty"`
	Segments      []Segment `json:"Segments,omitempty"`
}
