package shared

// VideoObjectTrackingAnnotation
// Annotation details for video object tracking.
type VideoObjectTrackingAnnotation struct {
	BoundingBox *BoundingPoly `json:"boundingBox,omitempty"`
	InstanceID  *string       `json:"instanceId,omitempty"`
	Score       *float32      `json:"score,omitempty"`
	TimeOffset  *string       `json:"timeOffset,omitempty"`
}
