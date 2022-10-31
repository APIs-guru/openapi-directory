package shared

import (
	"time"
)

type RepositorySubscription struct {
	CreatedAt     time.Time `json:"created_at"`
	Ignored       bool      `json:"ignored"`
	Reason        string    `json:"reason"`
	RepositoryURL string    `json:"repository_url"`
	Subscribed    bool      `json:"subscribed"`
	URL           string    `json:"url"`
}
