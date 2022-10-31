package shared



type CreatePresignedNotebookInstanceURLInput struct {
    NotebookInstanceName string `json:"NotebookInstanceName"`
    SessionExpirationDurationInSeconds *int64 `json:"SessionExpirationDurationInSeconds,omitempty"`
    
}

