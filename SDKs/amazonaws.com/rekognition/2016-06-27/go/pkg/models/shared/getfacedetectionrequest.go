package shared



type GetFaceDetectionRequest struct {
    JobID string `json:"JobId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

