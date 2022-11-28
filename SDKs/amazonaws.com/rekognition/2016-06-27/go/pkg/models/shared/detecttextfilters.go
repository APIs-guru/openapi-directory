package shared

// DetectTextFilters
// A set of optional parameters that you can use to set the criteria that the text must meet to be included in your response. <code>WordFilter</code> looks at a word’s height, width, and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the image to look for text in.
type DetectTextFilters struct {
	RegionsOfInterest []RegionOfInterest `json:"RegionsOfInterest,omitempty"`
	WordFilter        *DetectionFilter   `json:"WordFilter,omitempty"`
}
