package shared

// Dimension
// This type defines the annotation and dimension key used by the report. For information on how to set these values, see Reading Promoted Listings reports.
type Dimension struct {
	AnnotationKeys []string `json:"annotationKeys,omitempty"`
	DimensionKey   *string  `json:"dimensionKey,omitempty"`
}
