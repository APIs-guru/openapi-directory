package shared

type StartTextDetectionFilters struct {
	RegionsOfInterest []RegionOfInterest `json:"RegionsOfInterest"`
	WordFilter        *DetectionFilter   `json:"WordFilter"`
}
