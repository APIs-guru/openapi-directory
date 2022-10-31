package shared

type SegmentTypeInfo struct {
	ModelVersion *string          `json:"ModelVersion,omitempty"`
	Type         *SegmentTypeEnum `json:"Type,omitempty"`
}
