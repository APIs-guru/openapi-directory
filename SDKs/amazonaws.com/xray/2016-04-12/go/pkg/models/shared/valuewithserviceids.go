package shared



type ValueWithServiceIds struct {
    AnnotationValue *AnnotationValue `json:"AnnotationValue,omitempty"`
    ServiceIds []ServiceID `json:"ServiceIds,omitempty"`
    
}

