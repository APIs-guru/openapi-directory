package shared

import (
"time")

type Breadcrumb struct {
    Action *string `json:"action,omitempty"`
    DateTime *time.Time `json:"dateTime,omitempty"`
    Message *string `json:"message,omitempty"`
    Severity *string `json:"severity,omitempty"`
    
}

