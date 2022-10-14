package shared

type TransformResources struct {
	InstanceCount  int64                     `json:"InstanceCount"`
	InstanceType   TransformInstanceTypeEnum `json:"InstanceType"`
	VolumeKmsKeyID *string                   `json:"VolumeKmsKeyId,omitempty"`
}
