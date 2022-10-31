package shared



type PutLifecyclePolicyInput struct {
    ContainerName string `json:"ContainerName"`
    LifecyclePolicy string `json:"LifecyclePolicy"`
    
}

