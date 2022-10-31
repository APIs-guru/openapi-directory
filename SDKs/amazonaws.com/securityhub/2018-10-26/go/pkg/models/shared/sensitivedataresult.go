package shared



type SensitiveDataResult struct {
    Category *string `json:"Category,omitempty"`
    Detections []SensitiveDataDetections `json:"Detections,omitempty"`
    TotalCount *int64 `json:"TotalCount,omitempty"`
    
}

