package shared

type VideoObjectTrackingAnnotation struct {
	BoundingBox *BoundingPoly `json:"boundingBox"`
	InstanceID  *string       `json:"instanceId"`
	Score       *float32      `json:"score"`
	TimeOffset  *string       `json:"timeOffset"`
}
