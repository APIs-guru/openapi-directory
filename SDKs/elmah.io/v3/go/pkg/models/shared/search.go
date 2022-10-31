package shared

import (
"time")

type Search struct {
    From *time.Time `json:"from,omitempty"`
    Query *string `json:"query,omitempty"`
    To *time.Time `json:"to,omitempty"`
    
}

