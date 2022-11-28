package shared

// ProcessingClusterConfig
// Configuration for the cluster used to run a processing job.
type ProcessingClusterConfig struct {
	InstanceCount  int64                      `json:"InstanceCount"`
	InstanceType   ProcessingInstanceTypeEnum `json:"InstanceType"`
	VolumeKmsKeyID *string                    `json:"VolumeKmsKeyId,omitempty"`
	VolumeSizeInGb int64                      `json:"VolumeSizeInGB"`
}
