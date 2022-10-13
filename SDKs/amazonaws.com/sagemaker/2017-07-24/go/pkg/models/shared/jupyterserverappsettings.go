package shared

type JupyterServerAppSettings struct {
	DefaultResourceSpec *ResourceSpec `json:"DefaultResourceSpec"`
	LifecycleConfigArns []string      `json:"LifecycleConfigArns"`
}
