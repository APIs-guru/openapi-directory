package shared



type CheckpointConfig struct {
    LocalPath *string `json:"LocalPath,omitempty"`
    S3URI string `json:"S3Uri"`
    
}

