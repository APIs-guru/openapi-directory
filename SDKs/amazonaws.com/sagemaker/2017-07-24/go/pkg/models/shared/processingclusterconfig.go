package shared

type ProcessingClusterConfig struct {
	InstanceCount  int64                      `json:"InstanceCount"`
	InstanceType   ProcessingInstanceTypeEnum `json:"InstanceType"`
	VolumeKmsKeyID *string                    `json:"VolumeKmsKeyId"`
	VolumeSizeInGb int64                      `json:"VolumeSizeInGB"`
}
