package shared

// SegmentReference
// Specifies the segment identifier and version of a segment.
type SegmentReference struct {
	ID      string `json:"Id"`
	Version *int64 `json:"Version,omitempty"`
}
