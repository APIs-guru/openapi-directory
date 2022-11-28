package shared

// Geometry
// Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image.
type Geometry struct {
	BoundingBox *BoundingBox `json:"BoundingBox,omitempty"`
	Polygon     []Point      `json:"Polygon,omitempty"`
}
