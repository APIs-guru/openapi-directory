package shared



type ImageObjectDetectionAnnotation struct {
    BoundingBox *BoundingPoly `json:"boundingBox,omitempty"`
    Score *float32 `json:"score,omitempty"`
    
}

