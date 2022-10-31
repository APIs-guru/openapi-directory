package shared



type InferenceOutputConfiguration struct {
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    S3OutputConfiguration InferenceS3OutputConfiguration `json:"S3OutputConfiguration"`
    
}

