package shared

type Instance struct {
	BoundingBox *BoundingBox `json:"BoundingBox,omitempty"`
	Confidence  *float32     `json:"Confidence,omitempty"`
}
