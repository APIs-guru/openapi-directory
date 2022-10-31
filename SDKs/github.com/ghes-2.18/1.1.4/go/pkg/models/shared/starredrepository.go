package shared

import (
	"time"
)

type StarredRepository struct {
	Repo      Repository `json:"repo"`
	StarredAt time.Time  `json:"starred_at"`
}
