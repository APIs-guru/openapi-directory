package shared

// JupyterServerAppSettings
// The JupyterServer app settings.
type JupyterServerAppSettings struct {
	DefaultResourceSpec *ResourceSpec `json:"DefaultResourceSpec,omitempty"`
	LifecycleConfigArns []string      `json:"LifecycleConfigArns,omitempty"`
}
