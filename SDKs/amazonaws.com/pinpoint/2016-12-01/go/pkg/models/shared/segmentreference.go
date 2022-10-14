package shared

type SegmentReference struct {
	ID      string `json:"Id"`
	Version *int64 `json:"Version,omitempty"`
}
