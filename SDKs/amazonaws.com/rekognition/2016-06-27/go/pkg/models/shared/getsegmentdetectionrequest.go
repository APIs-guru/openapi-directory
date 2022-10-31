package shared



type GetSegmentDetectionRequest struct {
    JobID string `json:"JobId"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

