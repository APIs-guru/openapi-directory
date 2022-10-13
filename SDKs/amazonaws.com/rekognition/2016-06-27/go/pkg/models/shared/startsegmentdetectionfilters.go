package shared

type StartSegmentDetectionFilters struct {
	ShotFilter         *StartShotDetectionFilter         `json:"ShotFilter"`
	TechnicalCueFilter *StartTechnicalCueDetectionFilter `json:"TechnicalCueFilter"`
}
