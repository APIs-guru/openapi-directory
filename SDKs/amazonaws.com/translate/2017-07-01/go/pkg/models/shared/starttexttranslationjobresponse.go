package shared



type StartTextTranslationJobResponse struct {
    JobID *string `json:"JobId,omitempty"`
    JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
    
}

