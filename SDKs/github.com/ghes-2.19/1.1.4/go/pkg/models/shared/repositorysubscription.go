package shared

import (
	"time"
)

// RepositorySubscription
// Repository invitations let you manage who you collaborate with.
type RepositorySubscription struct {
	CreatedAt     time.Time `json:"created_at"`
	Ignored       bool      `json:"ignored"`
	Reason        string    `json:"reason"`
	RepositoryURL string    `json:"repository_url"`
	Subscribed    bool      `json:"subscribed"`
	URL           string    `json:"url"`
}
