package shared

import (
"time")

type ContainerServiceLogEvent struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

