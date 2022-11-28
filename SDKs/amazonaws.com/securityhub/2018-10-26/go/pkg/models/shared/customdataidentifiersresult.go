package shared

// CustomDataIdentifiersResult
// Contains an instance of sensitive data that was detected by a customer-defined identifier.
type CustomDataIdentifiersResult struct {
	Detections []CustomDataIdentifiersDetections `json:"Detections,omitempty"`
	TotalCount *int64                            `json:"TotalCount,omitempty"`
}
