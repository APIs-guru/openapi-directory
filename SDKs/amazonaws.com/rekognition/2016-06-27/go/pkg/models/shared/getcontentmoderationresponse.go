package shared



type GetContentModerationResponse struct {
    JobStatus *VideoJobStatusEnum `json:"JobStatus,omitempty"`
    ModerationLabels []ContentModerationDetection `json:"ModerationLabels,omitempty"`
    ModerationModelVersion *string `json:"ModerationModelVersion,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    VideoMetadata *VideoMetadata `json:"VideoMetadata,omitempty"`
    
}

