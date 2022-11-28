package shared

// DimensionKeyAnnotation
// This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be listing_title or listing_quantity_sold.
type DimensionKeyAnnotation struct {
	AnnotationKey *string `json:"annotationKey,omitempty"`
	DataType      *string `json:"dataType,omitempty"`
}
