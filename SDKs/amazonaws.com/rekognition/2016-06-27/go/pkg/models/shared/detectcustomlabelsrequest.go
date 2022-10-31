package shared



type DetectCustomLabelsRequest struct {
    Image Image `json:"Image"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    MinConfidence *float32 `json:"MinConfidence,omitempty"`
    ProjectVersionArn string `json:"ProjectVersionArn"`
    
}

