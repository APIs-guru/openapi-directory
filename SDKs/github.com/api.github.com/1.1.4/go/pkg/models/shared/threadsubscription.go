package shared

import (
	"time"
)

type ThreadSubscription struct {
	CreatedAt     time.Time `json:"created_at"`
	Ignored       bool      `json:"ignored"`
	Reason        string    `json:"reason"`
	RepositoryURL *string   `json:"repository_url,omitempty"`
	Subscribed    bool      `json:"subscribed"`
	ThreadURL     *string   `json:"thread_url,omitempty"`
	URL           string    `json:"url"`
}
