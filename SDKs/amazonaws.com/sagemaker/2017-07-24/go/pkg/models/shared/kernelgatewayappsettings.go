package shared

// KernelGatewayAppSettings
// The KernelGateway app settings.
type KernelGatewayAppSettings struct {
	CustomImages        []CustomImage `json:"CustomImages,omitempty"`
	DefaultResourceSpec *ResourceSpec `json:"DefaultResourceSpec,omitempty"`
	LifecycleConfigArns []string      `json:"LifecycleConfigArns,omitempty"`
}
