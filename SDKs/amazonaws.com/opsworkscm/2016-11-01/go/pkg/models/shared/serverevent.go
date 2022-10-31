package shared

import (
"time")

type ServerEvent struct {
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    LogURL *string `json:"LogUrl,omitempty"`
    Message *string `json:"Message,omitempty"`
    ServerName *string `json:"ServerName,omitempty"`
    
}

