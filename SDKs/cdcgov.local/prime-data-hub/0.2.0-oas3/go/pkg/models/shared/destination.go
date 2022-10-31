package shared

import (
"time")

type Destination struct {
    ItemCount *int64 `json:"itemCount,omitempty"`
    Organization *string `json:"organization,omitempty"`
    OrganizationID *string `json:"organization_id,omitempty"`
    SendingAt *time.Time `json:"sending_at,omitempty"`
    Service *string `json:"service,omitempty"`
    
}

