package shared



type StartTextDetectionFilters struct {
    RegionsOfInterest []RegionOfInterest `json:"RegionsOfInterest,omitempty"`
    WordFilter *DetectionFilter `json:"WordFilter,omitempty"`
    
}

