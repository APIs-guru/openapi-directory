package shared



type ListTranscriptionJobsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Status *TranscriptionJobStatusEnum `json:"Status,omitempty"`
    TranscriptionJobSummaries []TranscriptionJobSummary `json:"TranscriptionJobSummaries,omitempty"`
    
}

