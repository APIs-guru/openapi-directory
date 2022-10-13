package shared

type DetectTextFilters struct {
	RegionsOfInterest []RegionOfInterest `json:"RegionsOfInterest"`
	WordFilter        *DetectionFilter   `json:"WordFilter"`
}
