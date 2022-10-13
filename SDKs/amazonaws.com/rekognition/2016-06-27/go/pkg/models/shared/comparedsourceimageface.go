package shared

type ComparedSourceImageFace struct {
	BoundingBox *BoundingBox `json:"BoundingBox"`
	Confidence  *float32     `json:"Confidence"`
}
