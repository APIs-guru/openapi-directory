package shared

type DataCaptureConfigSummary struct {
	CaptureStatus             CaptureStatusEnum `json:"CaptureStatus"`
	CurrentSamplingPercentage int64             `json:"CurrentSamplingPercentage"`
	DestinationS3URI          string            `json:"DestinationS3Uri"`
	EnableCapture             bool              `json:"EnableCapture"`
	KmsKeyID                  string            `json:"KmsKeyId"`
}
