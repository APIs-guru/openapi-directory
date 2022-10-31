package shared



type ListMedicalTranscriptionJobsRequest struct {
    JobNameContains *string `json:"JobNameContains,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Status *TranscriptionJobStatusEnum `json:"Status,omitempty"`
    
}

