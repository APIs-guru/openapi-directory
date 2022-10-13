package shared

import (
	"time"
)

type PlayerSessionEvent struct {
	At        *int64     `json:"at"`
	EmittedAt *time.Time `json:"emittedAt"`
	From      *int64     `json:"from"`
	To        *int64     `json:"to"`
	Type      *string    `json:"type"`
}
