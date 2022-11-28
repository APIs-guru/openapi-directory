package shared

// TechnicalCueSegment
// Information about a technical cue segment. For more information, see <a>SegmentDetection</a>.
type TechnicalCueSegment struct {
	Confidence *float32              `json:"Confidence,omitempty"`
	Type       *TechnicalCueTypeEnum `json:"Type,omitempty"`
}
