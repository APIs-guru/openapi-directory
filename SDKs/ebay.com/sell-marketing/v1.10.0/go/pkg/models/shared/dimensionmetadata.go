package shared



type DimensionMetadata struct {
    DataType *string `json:"dataType,omitempty"`
    DimensionKey *string `json:"dimensionKey,omitempty"`
    DimensionKeyAnnotations []DimensionKeyAnnotation `json:"dimensionKeyAnnotations,omitempty"`
    
}

