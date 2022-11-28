package shared

// TransformResources
// Describes the resources, including ML instance types and ML instance count, to use for transform job.
type TransformResources struct {
	InstanceCount  int64                     `json:"InstanceCount"`
	InstanceType   TransformInstanceTypeEnum `json:"InstanceType"`
	VolumeKmsKeyID *string                   `json:"VolumeKmsKeyId,omitempty"`
}
