package shared

import (
	"time"
)

type RelationalDatabaseEvent struct {
	CreatedAt       *time.Time `json:"createdAt"`
	EventCategories []string   `json:"eventCategories"`
	Message         *string    `json:"message"`
	Resource        *string    `json:"resource"`
}
