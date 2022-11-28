package shared

// StartTextDetectionFilters
// Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in.
type StartTextDetectionFilters struct {
	RegionsOfInterest []RegionOfInterest `json:"RegionsOfInterest,omitempty"`
	WordFilter        *DetectionFilter   `json:"WordFilter,omitempty"`
}
