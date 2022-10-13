package shared

type VideoClassificationAnnotation struct {
	ClassificationAnnotation *ClassificationAnnotation `json:"classificationAnnotation"`
	TimeSegment              *TimeSegment              `json:"timeSegment"`
	Type                     *string                   `json:"type"`
}
