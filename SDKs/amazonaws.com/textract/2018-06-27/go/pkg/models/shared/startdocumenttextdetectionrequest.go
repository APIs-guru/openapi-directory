package shared



type StartDocumentTextDetectionRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    DocumentLocation DocumentLocation `json:"DocumentLocation"`
    JobTag *string `json:"JobTag,omitempty"`
    KmsKeyID *string `json:"KMSKeyId,omitempty"`
    NotificationChannel *NotificationChannel `json:"NotificationChannel,omitempty"`
    OutputConfig *OutputConfig `json:"OutputConfig,omitempty"`
    
}

