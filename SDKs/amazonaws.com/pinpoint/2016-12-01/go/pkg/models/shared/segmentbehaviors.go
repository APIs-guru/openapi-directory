package shared

// SegmentBehaviors
// Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.
type SegmentBehaviors struct {
	Recency *RecencyDimension `json:"Recency,omitempty"`
}
