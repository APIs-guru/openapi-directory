package shared

import (
"time")

type SecretScanningAlert struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    Number *int64 `json:"number,omitempty"`
    Resolution *string `json:"resolution,omitempty"`
    ResolvedAt *time.Time `json:"resolved_at,omitempty"`
    ResolvedBy *SimpleUser `json:"resolved_by,omitempty"`
    Secret *string `json:"secret,omitempty"`
    SecretType *string `json:"secret_type,omitempty"`
    State *SecretScanningAlertStateEnum `json:"state,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

