package shared

import (
"time")

type InteractionLimitResponse struct {
    ExpiresAt time.Time `json:"expires_at"`
    Limit InteractionGroupEnum `json:"limit"`
    Origin string `json:"origin"`
    
}

