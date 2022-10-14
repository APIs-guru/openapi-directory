package shared

type MonitoringClusterConfig struct {
	InstanceCount  int64                      `json:"InstanceCount"`
	InstanceType   ProcessingInstanceTypeEnum `json:"InstanceType"`
	VolumeKmsKeyID *string                    `json:"VolumeKmsKeyId,omitempty"`
	VolumeSizeInGb int64                      `json:"VolumeSizeInGB"`
}
