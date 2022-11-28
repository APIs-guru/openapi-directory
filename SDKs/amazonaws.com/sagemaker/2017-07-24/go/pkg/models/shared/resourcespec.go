package shared

// ResourceSpec
// Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
type ResourceSpec struct {
	InstanceType             *AppInstanceTypeEnum `json:"InstanceType,omitempty"`
	LifecycleConfigArn       *string              `json:"LifecycleConfigArn,omitempty"`
	SageMakerImageArn        *string              `json:"SageMakerImageArn,omitempty"`
	SageMakerImageVersionArn *string              `json:"SageMakerImageVersionArn,omitempty"`
}
