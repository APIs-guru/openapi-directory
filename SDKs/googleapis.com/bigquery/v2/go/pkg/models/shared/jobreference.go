package shared



type JobReference struct {
    JobID *string `json:"jobId,omitempty"`
    Location *string `json:"location,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    
}

