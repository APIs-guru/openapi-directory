package shared



type GetPersonTrackingResponse struct {
    JobStatus *VideoJobStatusEnum `json:"JobStatus,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Persons []PersonDetection `json:"Persons,omitempty"`
    StatusMessage *string `json:"StatusMessage,omitempty"`
    VideoMetadata *VideoMetadata `json:"VideoMetadata,omitempty"`
    
}

