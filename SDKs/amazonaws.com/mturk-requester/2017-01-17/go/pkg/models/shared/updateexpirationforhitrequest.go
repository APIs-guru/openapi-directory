package shared

import (
"time")

type UpdateExpirationForHitRequest struct {
    ExpireAt time.Time `json:"ExpireAt"`
    HitID string `json:"HITId"`
    
}

