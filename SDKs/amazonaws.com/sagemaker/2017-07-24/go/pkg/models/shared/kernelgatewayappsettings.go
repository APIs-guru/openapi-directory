package shared



type KernelGatewayAppSettings struct {
    CustomImages []CustomImage `json:"CustomImages,omitempty"`
    DefaultResourceSpec *ResourceSpec `json:"DefaultResourceSpec,omitempty"`
    LifecycleConfigArns []string `json:"LifecycleConfigArns,omitempty"`
    
}

