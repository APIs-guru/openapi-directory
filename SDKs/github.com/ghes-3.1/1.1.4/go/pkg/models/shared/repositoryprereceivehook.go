package shared



type RepositoryPreReceiveHook struct {
    ConfigurationURL *string `json:"configuration_url,omitempty"`
    Enforcement *string `json:"enforcement,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

