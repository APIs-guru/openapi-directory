package shared

type JupyterServerAppSettings struct {
	DefaultResourceSpec *ResourceSpec `json:"DefaultResourceSpec,omitempty"`
	LifecycleConfigArns []string      `json:"LifecycleConfigArns,omitempty"`
}
