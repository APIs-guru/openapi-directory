package shared



type MonitoringS3Output struct {
    LocalPath string `json:"LocalPath"`
    S3UploadMode *ProcessingS3UploadModeEnum `json:"S3UploadMode,omitempty"`
    S3URI string `json:"S3Uri"`
    
}

