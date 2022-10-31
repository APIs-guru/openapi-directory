package shared



type PreReceiveHookEnvironmentDownload struct {
    DownloadedAt *string `json:"downloaded_at,omitempty"`
    Message *string `json:"message,omitempty"`
    State *string `json:"state,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type PreReceiveHookEnvironment struct {
    CreatedAt *string `json:"created_at,omitempty"`
    DefaultEnvironment *bool `json:"default_environment,omitempty"`
    Download *PreReceiveHookEnvironmentDownload `json:"download,omitempty"`
    HooksCount *int64 `json:"hooks_count,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    ID *int64 `json:"id,omitempty"`
    ImageURL *string `json:"image_url,omitempty"`
    Name *string `json:"name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type PreReceiveHookScriptRepository struct {
    FullName *string `json:"full_name,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    ID *int64 `json:"id,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type PreReceiveHook struct {
    AllowDownstreamConfiguration *bool `json:"allow_downstream_configuration,omitempty"`
    Enforcement *string `json:"enforcement,omitempty"`
    Environment *PreReceiveHookEnvironment `json:"environment,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Script *string `json:"script,omitempty"`
    ScriptRepository *PreReceiveHookScriptRepository `json:"script_repository,omitempty"`
    
}

