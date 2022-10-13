package shared

type ResourceSpec struct {
	InstanceType             *AppInstanceTypeEnum `json:"InstanceType"`
	LifecycleConfigArn       *string              `json:"LifecycleConfigArn"`
	SageMakerImageArn        *string              `json:"SageMakerImageArn"`
	SageMakerImageVersionArn *string              `json:"SageMakerImageVersionArn"`
}
