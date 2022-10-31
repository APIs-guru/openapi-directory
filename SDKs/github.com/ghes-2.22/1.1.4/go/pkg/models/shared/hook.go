package shared

import (
"time")

type HookConfig struct {
    ContentType *string `json:"content_type,omitempty"`
    Digest *string `json:"digest,omitempty"`
    Email *string `json:"email,omitempty"`
    InsecureSsl *interface{} `json:"insecure_ssl,omitempty"`
    Password *string `json:"password,omitempty"`
    Room *string `json:"room,omitempty"`
    Secret *string `json:"secret,omitempty"`
    Subdomain *string `json:"subdomain,omitempty"`
    Token *string `json:"token,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type Hook struct {
    Active bool `json:"active"`
    Config HookConfig `json:"config"`
    CreatedAt time.Time `json:"created_at"`
    Events []string `json:"events"`
    ID int64 `json:"id"`
    LastResponse HookResponse `json:"last_response"`
    Name string `json:"name"`
    PingURL string `json:"ping_url"`
    TestURL string `json:"test_url"`
    Type string `json:"type"`
    UpdatedAt time.Time `json:"updated_at"`
    URL string `json:"url"`
    
}

