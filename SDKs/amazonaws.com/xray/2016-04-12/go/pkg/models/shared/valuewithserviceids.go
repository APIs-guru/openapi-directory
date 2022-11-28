package shared

// ValueWithServiceIds
// Information about a segment annotation.
type ValueWithServiceIds struct {
	AnnotationValue *AnnotationValue `json:"AnnotationValue,omitempty"`
	ServiceIds      []ServiceID      `json:"ServiceIds,omitempty"`
}
