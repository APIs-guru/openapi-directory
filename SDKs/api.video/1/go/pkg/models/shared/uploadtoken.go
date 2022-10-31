package shared

import (
"time")

type UploadToken struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    ExpiresAt *time.Time `json:"expiresAt,omitempty"`
    Token *string `json:"token,omitempty"`
    TTL *int64 `json:"ttl,omitempty"`
    
}

