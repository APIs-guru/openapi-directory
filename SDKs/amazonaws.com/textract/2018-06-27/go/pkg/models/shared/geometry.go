package shared

type Geometry struct {
	BoundingBox *BoundingBox `json:"BoundingBox"`
	Polygon     []Point      `json:"Polygon"`
}
