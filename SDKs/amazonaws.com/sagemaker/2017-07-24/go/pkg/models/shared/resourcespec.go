package shared



type ResourceSpec struct {
    InstanceType *AppInstanceTypeEnum `json:"InstanceType,omitempty"`
    LifecycleConfigArn *string `json:"LifecycleConfigArn,omitempty"`
    SageMakerImageArn *string `json:"SageMakerImageArn,omitempty"`
    SageMakerImageVersionArn *string `json:"SageMakerImageVersionArn,omitempty"`
    
}

