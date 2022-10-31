package shared



type DetectLabelsRequest struct {
    Image Image `json:"Image"`
    MaxLabels *int64 `json:"MaxLabels,omitempty"`
    MinConfidence *float32 `json:"MinConfidence,omitempty"`
    
}

