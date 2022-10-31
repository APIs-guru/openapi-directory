package shared

type Dimension struct {
	AnnotationKeys []string `json:"annotationKeys,omitempty"`
	DimensionKey   *string  `json:"dimensionKey,omitempty"`
}
