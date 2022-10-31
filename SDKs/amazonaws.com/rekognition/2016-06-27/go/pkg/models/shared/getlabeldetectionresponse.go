package shared



type GetLabelDetectionResponse struct {
    JobStatus *VideoJobStatusEnum `json:"JobStatus,omitempty"`
    LabelModelVersion *string `json:"LabelModelVersion,omitempty"`
    Labels []LabelDetection `json:"Labels,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    VideoMetadata *VideoMetadata `json:"VideoMetadata,omitempty"`
    
}

