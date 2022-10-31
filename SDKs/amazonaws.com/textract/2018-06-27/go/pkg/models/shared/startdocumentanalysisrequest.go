package shared



type StartDocumentAnalysisRequest struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    DocumentLocation DocumentLocation `json:"DocumentLocation"`
    FeatureTypes []FeatureTypeEnum `json:"FeatureTypes"`
    JobTag *string `json:"JobTag,omitempty"`
    KmsKeyID *string `json:"KMSKeyId,omitempty"`
    NotificationChannel *NotificationChannel `json:"NotificationChannel,omitempty"`
    OutputConfig *OutputConfig `json:"OutputConfig,omitempty"`
    
}

