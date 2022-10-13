package shared

type ImageObjectDetectionAnnotation struct {
	BoundingBox *BoundingPoly `json:"boundingBox"`
	Score       *float32      `json:"score"`
}
