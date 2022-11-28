package shared

// ContentModerationDetection
// Information about an inappropriate, unwanted, or offensive content label detection in a stored video.
type ContentModerationDetection struct {
	ModerationLabel *ModerationLabel `json:"ModerationLabel,omitempty"`
	Timestamp       *int64           `json:"Timestamp,omitempty"`
}
