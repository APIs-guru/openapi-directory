package shared

type DetectTextFilters struct {
	RegionsOfInterest []RegionOfInterest `json:"RegionsOfInterest,omitempty"`
	WordFilter        *DetectionFilter   `json:"WordFilter,omitempty"`
}
