package shared

type Geometry struct {
	BoundingBox *BoundingBox `json:"BoundingBox,omitempty"`
	Polygon     []Point      `json:"Polygon,omitempty"`
}
