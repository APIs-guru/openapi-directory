package shared

// StartSegmentDetectionFilters
// Filters applied to the technical cue or shot detection segments. For more information, see <a>StartSegmentDetection</a>.
type StartSegmentDetectionFilters struct {
	ShotFilter         *StartShotDetectionFilter         `json:"ShotFilter,omitempty"`
	TechnicalCueFilter *StartTechnicalCueDetectionFilter `json:"TechnicalCueFilter,omitempty"`
}
