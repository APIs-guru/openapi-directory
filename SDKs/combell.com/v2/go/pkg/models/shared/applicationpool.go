package shared

type ApplicationPool struct {
	InstalledNetCoreRuntimes []string `json:"installed_net_core_runtimes"`
	PipelineMode             *string  `json:"pipeline_mode"`
	Runtime                  *string  `json:"runtime"`
}
