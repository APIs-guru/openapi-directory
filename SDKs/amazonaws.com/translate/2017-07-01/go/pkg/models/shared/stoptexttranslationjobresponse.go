package shared



type StopTextTranslationJobResponse struct {
    JobID *string `json:"JobId,omitempty"`
    JobStatus *JobStatusEnum `json:"JobStatus,omitempty"`
    
}

