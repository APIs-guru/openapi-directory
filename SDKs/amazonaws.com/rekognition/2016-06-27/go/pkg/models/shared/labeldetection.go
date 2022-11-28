package shared

// LabelDetection
// Information about a label detected in a video analysis request and the time the label was detected in the video.
type LabelDetection struct {
	Label     *Label `json:"Label,omitempty"`
	Timestamp *int64 `json:"Timestamp,omitempty"`
}
