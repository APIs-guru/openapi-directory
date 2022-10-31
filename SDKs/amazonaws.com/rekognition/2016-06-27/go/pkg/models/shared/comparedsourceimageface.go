package shared

type ComparedSourceImageFace struct {
	BoundingBox *BoundingBox `json:"BoundingBox,omitempty"`
	Confidence  *float32     `json:"Confidence,omitempty"`
}
