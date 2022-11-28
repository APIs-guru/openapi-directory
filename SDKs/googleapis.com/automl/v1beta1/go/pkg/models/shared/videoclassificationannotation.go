package shared

// VideoClassificationAnnotation
// Contains annotation details specific to video classification.
type VideoClassificationAnnotation struct {
	ClassificationAnnotation *ClassificationAnnotation `json:"classificationAnnotation,omitempty"`
	TimeSegment              *TimeSegment              `json:"timeSegment,omitempty"`
	Type                     *string                   `json:"type,omitempty"`
}
