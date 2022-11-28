package shared

// DimensionMetadata
// This type defines the dimension used to create the report and the annotation keys associated with that dimension.
type DimensionMetadata struct {
	DataType                *string                  `json:"dataType,omitempty"`
	DimensionKey            *string                  `json:"dimensionKey,omitempty"`
	DimensionKeyAnnotations []DimensionKeyAnnotation `json:"dimensionKeyAnnotations,omitempty"`
}
