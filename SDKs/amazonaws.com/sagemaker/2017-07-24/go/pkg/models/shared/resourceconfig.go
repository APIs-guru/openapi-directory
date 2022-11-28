package shared

// ResourceConfig
// Describes the resources, including ML compute instances and ML storage volumes, to use for model training.
type ResourceConfig struct {
	InstanceCount  int64                    `json:"InstanceCount"`
	InstanceType   TrainingInstanceTypeEnum `json:"InstanceType"`
	VolumeKmsKeyID *string                  `json:"VolumeKmsKeyId,omitempty"`
	VolumeSizeInGb int64                    `json:"VolumeSizeInGB"`
}
