package shared



type DataCaptureConfig struct {
    CaptureContentTypeHeader *CaptureContentTypeHeader `json:"CaptureContentTypeHeader,omitempty"`
    CaptureOptions []CaptureOption `json:"CaptureOptions"`
    DestinationS3URI string `json:"DestinationS3Uri"`
    EnableCapture *bool `json:"EnableCapture,omitempty"`
    InitialSamplingPercentage int64 `json:"InitialSamplingPercentage"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    
}

