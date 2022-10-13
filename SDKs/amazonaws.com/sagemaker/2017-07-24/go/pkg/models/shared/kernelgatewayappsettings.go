package shared

type KernelGatewayAppSettings struct {
	CustomImages        []CustomImage `json:"CustomImages"`
	DefaultResourceSpec *ResourceSpec `json:"DefaultResourceSpec"`
	LifecycleConfigArns []string      `json:"LifecycleConfigArns"`
}
