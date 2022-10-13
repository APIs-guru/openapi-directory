package shared

type SensitiveDataResult struct {
	Category   *string                   `json:"Category"`
	Detections []SensitiveDataDetections `json:"Detections"`
	TotalCount *int64                    `json:"TotalCount"`
}
