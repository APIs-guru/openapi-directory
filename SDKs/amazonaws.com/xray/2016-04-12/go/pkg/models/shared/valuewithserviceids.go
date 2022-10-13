package shared

type ValueWithServiceIds struct {
	AnnotationValue *AnnotationValue `json:"AnnotationValue"`
	ServiceIds      []ServiceID      `json:"ServiceIds"`
}
