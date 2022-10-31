package shared



type SharingSettings struct {
    NotebookOutputOption *NotebookOutputOptionEnum `json:"NotebookOutputOption,omitempty"`
    S3KmsKeyID *string `json:"S3KmsKeyId,omitempty"`
    S3OutputPath *string `json:"S3OutputPath,omitempty"`
    
}

