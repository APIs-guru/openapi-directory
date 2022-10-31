package shared



type ApplicationPool struct {
    InstalledNetCoreRuntimes []string `json:"installed_net_core_runtimes,omitempty"`
    PipelineMode *string `json:"pipeline_mode,omitempty"`
    Runtime *string `json:"runtime,omitempty"`
    
}

