package shared

// BoundingPoly
// A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed.
type BoundingPoly struct {
	NormalizedVertices []NormalizedVertex `json:"normalizedVertices,omitempty"`
}
