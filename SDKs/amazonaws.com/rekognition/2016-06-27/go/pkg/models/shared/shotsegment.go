package shared

// ShotSegment
// Information about a shot detection segment detected in a video. For more information, see <a>SegmentDetection</a>.
type ShotSegment struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Index      *int64   `json:"Index,omitempty"`
}
