package shared

import (
	"time"
)

// StarredRepository
// Starred Repository
type StarredRepository struct {
	Repo      Repository `json:"repo"`
	StarredAt time.Time  `json:"starred_at"`
}
