package shared

import (
	"time"
)

// ActionsSecret
// Set secrets for GitHub Actions.
type ActionsSecret struct {
	CreatedAt time.Time `json:"created_at"`
	Name      string    `json:"name"`
	UpdatedAt time.Time `json:"updated_at"`
}
