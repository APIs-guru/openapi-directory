package shared

// AwsEcsTaskDefinitionInferenceAcceleratorsDetails
// An Elastic Inference accelerator to use for the containers in the task.
type AwsEcsTaskDefinitionInferenceAcceleratorsDetails struct {
	DeviceName *string `json:"DeviceName,omitempty"`
	DeviceType *string `json:"DeviceType,omitempty"`
}
