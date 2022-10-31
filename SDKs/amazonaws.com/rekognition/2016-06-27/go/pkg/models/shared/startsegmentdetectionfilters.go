package shared

type StartSegmentDetectionFilters struct {
	ShotFilter         *StartShotDetectionFilter         `json:"ShotFilter,omitempty"`
	TechnicalCueFilter *StartTechnicalCueDetectionFilter `json:"TechnicalCueFilter,omitempty"`
}
