package shared



type OrgPreReceiveHook struct {
    AllowDownstreamConfiguration *bool `json:"allow_downstream_configuration,omitempty"`
    ConfigurationURL *string `json:"configuration_url,omitempty"`
    Enforcement *string `json:"enforcement,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

