package shared

type DataCaptureConfig struct {
	CaptureContentTypeHeader  *CaptureContentTypeHeader `json:"CaptureContentTypeHeader"`
	CaptureOptions            []CaptureOption           `json:"CaptureOptions"`
	DestinationS3URI          string                    `json:"DestinationS3Uri"`
	EnableCapture             *bool                     `json:"EnableCapture"`
	InitialSamplingPercentage int64                     `json:"InitialSamplingPercentage"`
	KmsKeyID                  *string                   `json:"KmsKeyId"`
}
