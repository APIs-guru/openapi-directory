package shared

import (
"time")

type PlayerSessionEvent struct {
    At *int64 `json:"at,omitempty"`
    EmittedAt *time.Time `json:"emittedAt,omitempty"`
    From *int64 `json:"from,omitempty"`
    To *int64 `json:"to,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

