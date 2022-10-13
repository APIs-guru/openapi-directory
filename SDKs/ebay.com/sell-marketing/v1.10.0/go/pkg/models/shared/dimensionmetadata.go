package shared

type DimensionMetadata struct {
	DataType                *string                  `json:"dataType"`
	DimensionKey            *string                  `json:"dimensionKey"`
	DimensionKeyAnnotations []DimensionKeyAnnotation `json:"dimensionKeyAnnotations"`
}
