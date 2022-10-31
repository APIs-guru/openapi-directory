package shared



type CustomDataIdentifiersResult struct {
    Detections []CustomDataIdentifiersDetections `json:"Detections,omitempty"`
    TotalCount *int64 `json:"TotalCount,omitempty"`
    
}

