package shared

// SegmentTypeInfo
// Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>. An array of <code>SegmentTypeInfo</code> objects is returned by the response from <a>GetSegmentDetection</a>.
type SegmentTypeInfo struct {
	ModelVersion *string          `json:"ModelVersion,omitempty"`
	Type         *SegmentTypeEnum `json:"Type,omitempty"`
}
