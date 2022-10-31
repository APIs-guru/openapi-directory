package shared



type InferenceInputConfiguration struct {
    InferenceInputNameConfiguration *InferenceInputNameConfiguration `json:"InferenceInputNameConfiguration,omitempty"`
    InputTimeZoneOffset *string `json:"InputTimeZoneOffset,omitempty"`
    S3InputConfiguration *InferenceS3InputConfiguration `json:"S3InputConfiguration,omitempty"`
    
}

