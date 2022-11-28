package shared

// Geometry
// Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
type Geometry struct {
	BoundingBox *BoundingBox `json:"BoundingBox,omitempty"`
	Polygon     []Point      `json:"Polygon,omitempty"`
}
