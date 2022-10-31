package shared



type GlobalHookConfig struct {
    ContentType *string `json:"content_type,omitempty"`
    InsecureSsl *string `json:"insecure_ssl,omitempty"`
    Secret *string `json:"secret,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type GlobalHook struct {
    Active *bool `json:"active,omitempty"`
    Config *GlobalHookConfig `json:"config,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    Events []string `json:"events,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    PingURL *string `json:"ping_url,omitempty"`
    Type *string `json:"type,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

