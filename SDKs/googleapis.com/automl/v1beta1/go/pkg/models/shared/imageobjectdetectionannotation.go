package shared

// ImageObjectDetectionAnnotation
// Annotation details for image object detection.
type ImageObjectDetectionAnnotation struct {
	BoundingBox *BoundingPoly `json:"boundingBox,omitempty"`
	Score       *float32      `json:"score,omitempty"`
}
