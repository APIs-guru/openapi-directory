package shared

// SensitiveDataResult
// Contains a detected instance of sensitive data that are based on built-in identifiers.
type SensitiveDataResult struct {
	Category   *string                   `json:"Category,omitempty"`
	Detections []SensitiveDataDetections `json:"Detections,omitempty"`
	TotalCount *int64                    `json:"TotalCount,omitempty"`
}
