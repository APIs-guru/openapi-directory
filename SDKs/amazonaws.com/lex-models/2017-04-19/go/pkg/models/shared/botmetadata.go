package shared

import (
	"time"
)

type BotMetadata struct {
	CreatedDate     *time.Time  `json:"createdDate"`
	Description     *string     `json:"description"`
	LastUpdatedDate *time.Time  `json:"lastUpdatedDate"`
	Name            *string     `json:"name"`
	Status          *StatusEnum `json:"status"`
	Version         *string     `json:"version"`
}
