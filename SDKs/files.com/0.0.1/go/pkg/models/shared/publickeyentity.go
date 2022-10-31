package shared

import (
"time")

type PublicKeyEntity struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

