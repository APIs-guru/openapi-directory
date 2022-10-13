package shared

type Instance struct {
	BoundingBox *BoundingBox `json:"BoundingBox"`
	Confidence  *float32     `json:"Confidence"`
}
